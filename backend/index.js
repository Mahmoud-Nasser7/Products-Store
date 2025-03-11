import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./Routes/product.route.js";
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT;
const URL = process.env.MONGOURL;
app.use(express.json());

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  }).catch((error) => console.error("MongoDB connection error:", error));

  app.use("/api", productRoutes);

