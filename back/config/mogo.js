import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error("❌ connection error:", err);
    process.exit(1); // Exit if connection fails
  }
};

export default connectDb;
