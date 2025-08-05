import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./Routes/authRoutes.js"

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.json({ message: "welcome to e‑commerce app" }));

 app.listen(process.env.PORT || 8000, () =>
      console.log(`🚀 Server running on ${process.env.PORT || 8000}`)
    );

mongoose
  .connect(process.env.DB_URL)           // ← no extra options needed
  .then(() => {
    console.log("✅ MongoDB connected");
   
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
