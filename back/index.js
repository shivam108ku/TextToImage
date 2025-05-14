import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/mogo.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/image",imageRouter)

const startServer = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
};

startServer();
