import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

// Models
import User from "../models/userModel";

// Utils
import catchAsync from "../utils/catchAsync";
import createError from "../utils/error";

// Types
import { AuthRequest } from "../types/types";

export const getBookmarks = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.userData?.id;

    const bookmarksData = await User.findById(userId).populate({
      path: "bookmarks",
      populate: {
        path: "createdBy",
        select: "profilePhoto username nick",
      },
    });

    res.status(200).json(bookmarksData?.bookmarks);
  }
);

export const addToBookmarks = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const userId = new mongoose.Types.ObjectId(req.userData!.id);
    const tweetId = new mongoose.Types.ObjectId(req.params.tweetId);

    await User.findByIdAndUpdate(
      userId,
      { $push: { bookmarks: { $each: [tweetId], $position: 0 } } },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Tweet was successfully added to bookmarks." });
  }
);

export const removeFromBookmarks = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const userId = new mongoose.Types.ObjectId(req.userData!.id);
    const tweetId = new mongoose.Types.ObjectId(req.params.tweetId);

    await User.findByIdAndUpdate(
      userId,
      { $pull: { bookmarks: tweetId } },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Tweet was succesfully removed from bookmarks." });
  }
);
