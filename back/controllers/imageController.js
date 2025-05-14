import userModel from "../models/userModel.js";
import axios from "axios";

// Moved to a separate config file for better maintainability
const BLOCKED_WORDS = new Set([
  "nude", "naked", "sex", "porn", "boobs", "nsfw",
  "vagina", "penis", "xxx", "erotic", "topless", "nipple"
]);

// Base URL for the API
const FLUX_API_URL = "https://flux-api-4-custom-models-100-style.p.rapidapi.com/create-v2";

export const generateImage = async (req, res) => {
  try {
    // 1. Input Validation
    const { prompt } = req.body;
    const userId = req.user?.id;

    if (!userId || !prompt?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Both userId and prompt are required"
      });
    }

    // 2. NSFW Content Check
    const lowerPrompt = prompt.toLowerCase();
    const containsBlockedWord = [...BLOCKED_WORDS].some(word =>
      lowerPrompt.includes(word)
    );

    if (containsBlockedWord) {
      return res.status(403).json({
        success: false,
        message: "Content policy violation: Prompt contains restricted terms",
      });
    }

    // 3. User Verification
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // 4. Credit Check
    if (user.creditBalance < 1) {
      return res.status(402).json({
        success: false,
        message: "Insufficient credits",
        creditBalance: user.creditBalance,
      });
    }

    // 5. Call Image Generation API (Headers set at runtime)
    const response = await axios.get(FLUX_API_URL, {
      params: {
        prompt,
        aspect_ratio: "16:9",
      },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "flux-api-4-custom-models-100-style.p.rapidapi.com"
      },
      timeout: 30000
    });

    // 6. Validate API Response
    const imageLink = response.data?.image_link;
    if (!imageLink) {
      throw new Error("No image link in API response");
    }

    // 7. Update User Credits
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { $inc: { creditBalance: -1 } },
      { new: true }
    );

    // 8. Success Response
    res.status(200).json({
      success: true,
      message: "Image generated successfully",
      creditBalance: updatedUser.creditBalance,
      imageUrl: imageLink,
      promptUsed: prompt
    });

  } catch (error) {
    console.error("Image generation error:", error);

    if (axios.isAxiosError(error)) {
      return res.status(502).json({
        success: false,
        message: "Image generation service unavailable"
      });
    }

    res.status(500).json({
      success: false,
      message: "Image generation failed",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
};
