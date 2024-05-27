import "express-async-errors"
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import router from "./routes/jobRouter.js";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js"
//midllewares
import errorHandler from "./middleware/errorHandler.js";
import { body, validationResult } from "express-validator";
import { authenticateUser } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
import { dirname } from "path"
import { fileURLToPath } from "url";
import path from "path"
import cloudinary from "cloudinary";



cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/dist")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser())
app.use(express.json());

app.use("/api/v1/jobs", authenticateUser, router);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter)

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist/index.html"));
})
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`listening to port ${port}`);
  });
} catch (error) {
  console.log(error.message);
}
app.use("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

// app.use();
