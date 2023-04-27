import mongoose from "mongoose";
import { NextFunction, Request, Response } from "express";

// Models
import Tweet from "../models/tweetModel";
import User from "../models/userModel";

// utils
import catchAsync from "../utils/catchAsync";
import createError from "../utils/error";

// Types
import { AuthRequest } from "../types/types";

export const editProfile = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const id = req.userData?.id;
    const { profilePhoto, secondPhoto, about, nick } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { profilePhoto, secondPhoto, about, nick },
      { new: true }
    );

    res.status(200).json({ message: "Succesfully edited", ...user });
  }
);

export const deleteAccount = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const id = req.userData?.id;

    const promises = [User.findByIdAndDelete(id), Tweet.deleteMany({ createdBy: id })];
    const result = await Promise.all(promises);

    if (result[0] === null) return next(createError(401, "Account was not found!"));

    res.status(200).json({ message: "Account deleted" });
  }
);
