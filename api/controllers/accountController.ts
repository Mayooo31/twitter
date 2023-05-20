import { NextFunction, Request, Response } from "express";

// Models
import Tweet from "../models/tweetModel";
import User from "../models/userModel";

// utils
import catchAsync from "../utils/catchAsync";
import createError from "../utils/error";

// Types
import { AuthRequest } from "../types/types";

type FilesType = {
  profilePhoto?: [
    {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      destination: string;
      filename: string;
      path: string;
      size: number;
    }
  ];
  secondPhoto?: [
    {
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      destination: string;
      filename: string;
      path: string;
      size: number;
    }
  ];
};

export const editProfile = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const id = req.userData?.id;

    const { about, nick } = req.body;

    const profilePhotofilename = (
      req.files as { [fieldname: string]: Express.Multer.File[] }
    )["profilePhoto"]?.[0]?.filename;

    const secondPhotofilename = (
      req.files as { [fieldname: string]: Express.Multer.File[] }
    )["secondPhoto"]?.[0]?.filename;

    console.log(profilePhotofilename);
    console.log(secondPhotofilename);

    const user = await User.findByIdAndUpdate(
      id,
      {
        profilePhoto:
          "http://localhost:3000/uploads/images/" + profilePhotofilename,
        secondPhoto:
          "http://localhost:3000/uploads/images/" + secondPhotofilename,
        about,
        nick,
      },
      { new: true }
    );

    res.status(200).json({ message: "Succesfully edited", ...user });
  }
);

export const deleteAccount = catchAsync(
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
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
  async (req: Request & AuthRequest, res: Response, next: NextFunction) => {
    const currentUserId = req.userData?.id;
    const { followedUserId } = req.body;

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

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getAccount = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;

    const foundAccount = await User.findOne({ username })
      .select("-password -__v")
      .populate("tweets");

    if (!foundAccount) {
      return next(createError(500, "Tento účet neexistuje."));
    }
    // await delay(2000);
    res.status(200).json(foundAccount);
  }
);

export const getFollowing = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;

    const following = await User.findOne({ username })
      .populate("following")
      .select("following");

    res.status(200).json({ following: following!.following });
  }
);

export const getFollowers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.params;

    const followers = await User.findOne({ username })
      .populate("followers")
      .select("followers");

    res.status(200).json({ followers: followers!.followers });
  }
);
