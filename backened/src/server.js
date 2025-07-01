import express from "express";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.js";

const app = express();

app.get("/", (req, res) => res.send("xtwitter, says hello world"));

const PORT = ENV.PORT || 5000;
const startSever = async () => {
  try {
    await connectDB();
    app.listen(PORT, () =>
      console.info(`server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Error", error);
    process.exit(1);
  }
};

startSever();
