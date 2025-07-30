import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

// add .env file
dotenv.config();

// Create express app
const app = express();
const PORT = process.env.PORT || 5001;


// Middleware (before routes) - app.use(...)
// A middleware is a function that executes between the request and response
// Example middleware use cases: auth check, rate limiting (e.g. only 100 requests per user every 15 mins)

// Parses JSON request bodies so req.body can be used
app.use(express.json());

// Middleware for rate limiter
app.use(rateLimiter);

// Used for logging route (custom middleware)
app.use((req, res, next) => {
  console.log(`Request method: ${req.method}, Request path (URL): ${req.path}`);
  next(); // goes to next route handler
});

// Whenever request starts with 1st arg, use router defined in 2nd arg
app.use("/api/notes", notesRoutes);

// Connect to database, then start server and listen for incoming HTTP requests
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
