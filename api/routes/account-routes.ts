import express from "express";
// Middleware
import { checkAuth } from "../middleware/check-auth";
// controllers
import {
  editProfile,
  deleteAccount,
  followAccount,
  getAccount,
} from "../controllers/accountController";

const router = express.Router();

// routes
router.patch("/edit", checkAuth, editProfile);
router.delete("/delete", checkAuth, deleteAccount);
router.put("/follow", checkAuth, followAccount);
router.get("/:username", getAccount);

export default router;
