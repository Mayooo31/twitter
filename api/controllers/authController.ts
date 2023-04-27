import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

import User from "../models/userModel";
import createError from "../utils/error";
import catchAsync from "../utils/catchAsync";

const createToken = (id: string, email: string) => {
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET!);

  return { token };
};

export const register = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password, age } = req.body;

    const user = await User.findOne({ email });

    if (user) return next(createError(401, "This email is already registered!"));
    if (password.length > 16)
      return next(createError(401, "Password is too long. Maximum is 16 characters!"));

    const createdUser = new User({
      username,
      email,
      password,
      age,
      nick: username,
    });

    await createdUser.save();

    const { token } = createToken(createdUser.id, email);

    res.status(200).json({ token, createdUser });
  }
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;

    if (username) {
      if (!password) {
        return next(createError(400, "Please provide username/email and password"));
      }

      const user = await User.findOne({ username });

      if (!user || !(await user.correctPassword(password))) {
        return next(createError(401, "Incorrect credentials!"));
      }

      const { token } = createToken(user.id, user.email);

      res.status(200).json({ token, user });
    } else {
      if (!email || !password) {
        return next(createError(400, "Please provide username/email and password"));
      }

      const user = await User.findOne({ email });

      if (!user || !(await user.correctPassword(password))) {
        return next(createError(401, "Incorrect credentials!"));
      }

      const { token } = createToken(user.id, email);

      res.status(200).json({ token, user });
    }
  }
);
