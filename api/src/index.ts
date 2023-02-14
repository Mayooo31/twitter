import express, { Request, Response } from "express";
import cors from "cors";

// Import routes
//

// Export app for ( server.js )
export const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
//
app.get("/", (req: Request, res: Response) => {
  res.json({ name: "Mario" });
});
