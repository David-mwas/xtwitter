import express from "express";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// routes
app.get("/", (req, res) => res.send("xtwitter, says hello world"));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments", commentRoutes);

// error handling
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

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
