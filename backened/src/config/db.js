import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URL);
    console.log("connected to mongoDB successfully..🚀.");
  } catch (error) {
    console.error("Error", error);
    process.exit(1);
  }
};
