import express from "express";
// Middleware
import { checkAuth } from "../middleware/check-auth";
// controllers
import { createTweet, likeTweet } from "../controllers/tweetController";

const router = express.Router();

// Middleware
router.use(checkAuth);

// routes
router.post("/create", createTweet);
router.put("/like", likeTweet);

export default router;
