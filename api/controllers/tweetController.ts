import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import Tweet from "../models/tweetModel";
import User from "../models/userModel";

import catchAsync from "../utils/catchAsync";
import createError from "../utils/error";

interface AuthRequest extends Request {
  userData?: {
    id: string;
    email: string;
  };
}

export const createTweet = catchAsync(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    const id = req.userData?.id;
    const { tweet, image } = req.body;

    if (!tweet) return next(createError(401, "Empty tweet is not allowed!"));

    const user = await User.findById(id);
    if (!user) return next(createError(401, "Something went wrong!"));

    const createdTweet = new Tweet({
      tweet,
      image,
      createdBy: id,
    });

    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdTweet.save({ session: sess });
    user?.tweets.push(createdTweet._id);
    await user.save({ session: sess });
    await sess.commitTransaction();

    res.status(200).json({ createdTweet });
  }
);
