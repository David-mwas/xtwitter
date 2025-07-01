import express from "express";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("xtwitter, says hello world"));

// routes
app.use("/api/v1/users", userRoutes);

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
