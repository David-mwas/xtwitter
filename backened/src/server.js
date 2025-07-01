import express from "express";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.js";

const app = express();
connectDB();

app.get("/", (req, res) => res.send("xtwitter, says hello world"));

const PORT = ENV.PORT || 5000;
app.listen(PORT, () => console.info(`server running on http://localhost:${PORT}`));
