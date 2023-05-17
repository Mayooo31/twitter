import express from "express";
// Middleware
import { checkAuth } from "../middleware/check-auth";
// controllers
import {
  editProfile,
  deleteAccount,
  followAccount,
  getAccount,
  getFollowing,
  getFollowers,
} from "../controllers/accountController";

const router = express.Router();

// routes
router.get("/:username", getAccount);
router.get("/:username/following", getFollowing);
router.get("/:username/followers", getFollowers);
router.put("/follow", checkAuth, followAccount);
router.patch("/edit", checkAuth, editProfile);
router.delete("/delete", checkAuth, deleteAccount);

export default router;
