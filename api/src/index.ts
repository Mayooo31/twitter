import express, { Request, Response } from "express";
import { ErrorRequestHandler } from "express";
import cors from "cors";

// Import routes
import authRoutes from "../routes/auth-routes";
import tweetRoutes from "../routes/tweet-routes";

// Export app for ( server.js )
export const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tweet", tweetRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({ name: "Mario" });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const errorStatus: number = err.status || 500;
  const errorMessage: string = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    message: errorMessage,
    status: errorStatus,
    stack: err.stack,
  });
};

app.use(errorHandler);
