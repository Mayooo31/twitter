import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import Tweet from "../models/tweetModel";
import User from "../models/userModel";

import catchAsync from "../utils/catchAsync";
import createError from "../utils/error";

export const createTweet = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { tweet, image } = req.body;

    if (!tweet) return next(createError(401, "Empty tweet is not allowed!"));

    const id = "642221af65a268c2fdf535b4";

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
