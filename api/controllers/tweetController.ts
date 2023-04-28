import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

// Models
import Tweet from "../models/tweetModel";
import User from "../models/userModel";

// Utils
import catchAsync from "../utils/catchAsync";
import createError from "../utils/error";

// Types
import { AuthRequest } from "../types/types";

export const createTweet = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
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

export const likeTweet = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.userData?.id;
    const { tweetId } = req.body;

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) return next(createError(401, "Tweet was not found!"));

    await Tweet.updateOne({ id: tweetId }, [
      {
        $set: {
          likes: {
            $cond: [
              { $in: [userId, "$likes"] },
              {
                $filter: {
                  input: "$likes",
                  cond: { $ne: ["$$this", userId] },
                },
              },
              { $concatArrays: ["$likes", [userId]] },
            ],
          },
        },
      },
    ]);

    res.status(200).json({ message: "Success" });
  }
);

export const retweetTweet = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.userData?.id;
    const { tweetId } = req.body;

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) return next(createError(401, "Tweet was not found!"));

    await Tweet.updateOne({ id: tweetId }, [
      {
        $set: {
          retweets: {
            $cond: [
              { $in: [userId, "$retweets"] },
              {
                $filter: {
                  input: "$retweets",
                  cond: { $ne: ["$$this", userId] },
                },
              },
              { $concatArrays: ["$retweets", [userId]] },
            ],
          },
        },
      },
    ]);

    res.status(200).json({ message: "Success" });
  }
);
