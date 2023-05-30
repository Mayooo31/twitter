import { NextFunction, Request, Response } from "express";
var mongoose = require("mongoose");
import fs from "fs";

// Models
import Tweet from "../models/tweetModel";
import User from "../models/userModel";

// utils
import catchAsync from "../utils/catchAsync";
import createError from "../utils/error";

// Types
import { ExtendedReq } from "../types/types";

export const editProfile = catchAsync(
  async (req: ExtendedReq, res: Response, next: NextFunction) => {
    const id = req.userData?.id;

    const { about, nick, oldProfilePhoto, oldSecondPhoto } = req.body;

    const profilePhotofilename = (
      req.files as { [fieldname: string]: Express.Multer.File[] }
    )["profilePhoto"]?.[0]?.filename;

    const secondPhotofilename = (
      req.files as { [fieldname: string]: Express.Multer.File[] }
    )["secondPhoto"]?.[0]?.filename;

    if (profilePhotofilename) {
      fs.unlink(
        "/uploads/images/" + oldProfilePhoto.split("/uploads/images/")[1],
        (err) => {
          console.log(err);
        }
      );
    }
    if (secondPhotofilename) {
      fs.unlink(
        "/uploads/images/" + oldSecondPhoto.split("/uploads/images/")[1],
        (err) => {
          console.log(err);
        }
      );
    }

    const user = await User.findByIdAndUpdate(
      id,
      {
        profilePhoto: profilePhotofilename
          ? process.env.API_URL + profilePhotofilename
          : oldProfilePhoto,
        secondPhoto: secondPhotofilename
          ? process.env.API_URL + secondPhotofilename
          : oldSecondPhoto,
        about,
        nick,
      },
      { new: true }
    ).select("-password -__v");

    res.status(200).json({ message: "Succesfully edited", ...user });
  }
);

export const deleteAccount = catchAsync(
  async (req: ExtendedReq, res: Response, next: NextFunction) => {
    const id = req.userData?.id;

    const promises = [
      User.findByIdAndDelete(id),
      Tweet.deleteMany({ createdBy: id }),
    ];
    const result = await Promise.all(promises);

    if (result[0] === null)
      return next(createError(401, "Account was not found!"));

    res.status(200).json({ message: "Account deleted" });
  }
);

export const followAccount = catchAsync(
  async (req: ExtendedReq, res: Response, next: NextFunction) => {
    // const currentUserId = req.userData?.id;
    const currentUserId = new mongoose.Types.ObjectId(req.userData!.id);
    const followedUserId = new mongoose.Types.ObjectId(req.body.followedUserId);

    await Promise.all([
      User.updateOne({ _id: currentUserId }, [
        {
          $set: {
            following: {
              $cond: [
                { $in: [followedUserId, "$following"] },
                {
                  $filter: {
                    input: "$following",
                    cond: { $ne: ["$$this", followedUserId] },
                  },
                },
                { $concatArrays: ["$following", [followedUserId]] },
              ],
            },
          },
        },
      ]),
      User.updateOne({ _id: followedUserId }, [
        {
          $set: {
            followers: {
              $cond: [
                { $in: [currentUserId, "$followers"] },
                {
                  $filter: {
                    input: "$followers",
                    cond: { $ne: ["$$this", currentUserId] },
                  },
                },
                { $concatArrays: ["$followers", [currentUserId]] },
              ],
            },
          },
        },
      ]),
    ]);

    res.status(200).json({ message: "Successfully followed." });
  }
);

export const getAccount = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;

    const foundAccount = await User.findOne({ username })
      .select("-password -__v")
      .populate("tweets");

    if (!foundAccount) {
      return next(createError(500, "Tento účet neexistuje."));
    }
    res.status(200).json(foundAccount);
  }
);

export const getFollowing = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;

    const following = await User.findOne({ username })
      .populate("following")
      .select("following nick");

    res.status(200).json(following);
  }
);

export const getFollowers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;

    const followers = await User.findOne({ username })
      .populate("followers")
      .select("followers nick");

    res.status(200).json(followers);
  }
);

export const getWhoToFollow = catchAsync(
  async (req: ExtendedReq, res: Response, next: NextFunction) => {
    const id = new mongoose.Types.ObjectId(req.userData!.id);

    const users = await User.find({
      _id: { $ne: id },
      followers: { $nin: [id] },
    }).limit(3);

    res.status(200).json(users);
  }
);
