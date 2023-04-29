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
router.get("/:tweetId", getTweet);
router.post("/create", checkAuth, createTweet);
router.put("/like", checkAuth, likeTweet);
router.put("/retweet", checkAuth, retweetTweet);

export default router;
