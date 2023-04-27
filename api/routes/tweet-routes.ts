import express from "express";
import { checkAuth } from "../middleware/check-auth";

// import controllers
import { createTweet } from "../controllers/tweetController";

const router = express.Router();

// Middleware
router.use(checkAuth);

// routes
router.post("/create", createTweet);

export default router;
