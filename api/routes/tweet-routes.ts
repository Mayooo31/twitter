import express from "express";
// Middleware
import { checkAuth } from "../middleware/check-auth";
// controllers
import { createTweet, likeTweet, retweetTweet } from "../controllers/tweetController";

const router = express.Router();

// Middleware
router.use(checkAuth);

// routes
router.post("/create", createTweet);
router.put("/like", likeTweet);
router.put("/retweet", retweetTweet);

export default router;
