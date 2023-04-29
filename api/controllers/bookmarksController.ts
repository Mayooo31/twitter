import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

// Models
import User from "../models/userModel";

// Utils
import catchAsync from "../utils/catchAsync";
import createError from "../utils/error";

// Types
import { AuthRequest } from "../types/types";

export const addToBookmarks = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.userData?.id;
    const { tweetId } = req.params;

    await User.findByIdAndUpdate(
      userId,
      { $push: { bookmarks: tweetId } },
      { new: true }
    );

    res.status(200).json({ message: "Tweet was succesfully added to bookmarks." });
  }
);

export const removeFromBookmarks = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.userData?.id;
    const { tweetId } = req.params;

    await User.findByIdAndUpdate(
      userId,
      { $pull: { bookmarks: tweetId } },
      { new: true }
    );

    res.status(200).json({ message: "Tweet was succesfully removed from bookmarks." });
  }
);
