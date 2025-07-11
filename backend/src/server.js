import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

// add .env file
dotenv.config();

// Create express app
const app = express();
const PORT = process.env.PORT || 5001

// Database
connectDB();

// Whenever request starts with 1st arg, use router defined in 2nd arg
app.use("/api/notes", notesRoutes);

// Start server and listen for incoming HTTP requests
app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
