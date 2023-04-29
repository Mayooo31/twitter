import express from "express";
// Middleware
import { checkAuth } from "../middleware/check-auth";
// controllers
import {
  createTweet,
  getTweet,
  likeTweet,
  retweetTweet,
} from "../controllers/tweetController";

const router = express.Router();

// routes
router.post("/create", checkAuth, createTweet);
router.put("/like", checkAuth, likeTweet);
router.put("/retweet", checkAuth, retweetTweet);
router.get("/:tweetId", getTweet);

export default router;
