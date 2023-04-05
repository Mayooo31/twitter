import express from "express";

// import controllers
import { createTweet } from "../controllers/tweetController";

const router = express.Router();

// routes
router.post("/create", createTweet);

export default router;
