import express from "express";
// Middleware
import { checkAuth } from "../middleware/check-auth";
// controllers
import { editProfile, deleteAccount } from "../controllers/accountController";

const router = express.Router();

// Middleware
router.use(checkAuth);

// routes
router.patch("/edit", editProfile);
router.delete("/delete", deleteAccount);

export default router;
