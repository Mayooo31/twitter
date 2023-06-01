import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

// Models
import Tweet from "../models/tweetModel";
import User from "../models/userModel";

// Utils
import catchAsync from "../utils/catchAsync";
import createError from "../utils/error";

// Types
import { ExtendedReq } from "../types/types";

export const createTweet = catchAsync(
  async (req: ExtendedReq, res: Response, next: NextFunction) => {
    const id = req.userData?.id;
    const { tweet } = req.body;

    if (!tweet && !req?.file?.filename)
      return next(createError(401, "Empty tweet is not allowed!"));

    const user = await User.findById(id);
    if (!user) return next(createError(401, "Something went wrong!"));

    const createdTweet = new Tweet({
      tweet: tweet ?? "",
      image: req?.file?.filename ? process.env.API_URL + req.file.filename : "",
      createdBy: id,
    });

    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdTweet.save({ session: sess });
    user?.tweets.unshift(createdTweet._id);
    await user.save({ session: sess });
    await sess.commitTransaction();

    res.status(200).json(createdTweet);
  }
);

export const likeTweet = catchAsync(
  async (req: ExtendedReq, res: Response, next: NextFunction) => {
    const userId = new mongoose.Types.ObjectId(req.userData!.id);
    const tweetId = new mongoose.Types.ObjectId(req.body.tweetId);

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) return next(createError(401, "Tweet was not found!"));

    await Tweet.updateOne({ _id: tweetId }, [
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
  async (req: ExtendedReq, res: Response, next: NextFunction) => {
    const userId = new mongoose.Types.ObjectId(req.userData!.id);
    const tweetId = new mongoose.Types.ObjectId(req.body.tweetId);

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) return next(createError(401, "Tweet was not found!"));

    await Tweet.updateOne({ _id: tweetId }, [
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

export const getTweet = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { tweetId } = req.params;

    const foundTweet = await Tweet.findOne({ _id: tweetId });

    res.status(200).json({ tweet: foundTweet });
  }
);

export const getFollowingTweets = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { following } = req.body;

    const tweets = await Tweet.find({ createdBy: { $in: following } })
      .sort({ createdAt: -1 })
      .populate("createdBy")
      .exec();

    res.status(200).json(tweets);
  }
);

export const getLastImages = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;

    const user = await User.findOne({ username });
    if (!user) return next(createError(401, "User was not found!"));

    const images = await Tweet.find({
      image: { $ne: "" },
      createdBy: user._id,
    })
      .sort({ createdAt: -1 })
      .limit(6)
      .select("image");

    res.status(200).json(images);
  }
);
