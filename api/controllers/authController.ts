import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

// Models
import User from "../models/userModel";

// Utils
import createError from "../utils/error";
import catchAsync from "../utils/catchAsync";

const createToken = (id: string, email: string) => {
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET!, {
    expiresIn: "365d",
  });
  return { token };
};

export const register = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password, age } = req.body;

    if (
      username === "register" ||
      username === "login" ||
      username === "search" ||
      username === "bookmarks"
    ) {
      return next(createError(401, "This name is not allowed!"));
    }

    const [userWithEmail, userWithUsername] = await Promise.all([
      User.findOne({ email }),
      User.findOne({ username }),
    ]);

    if (userWithUsername)
      return next(createError(401, "This username is already registered!"));
    if (userWithEmail)
      return next(createError(401, "This email is already registered!"));
    if (password.length > 16)
      return next(
        createError(401, "Password is too long. Maximum is 16 characters!")
      );

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
    const { email, password } = req.body;

    if (!email.includes("@")) {
      if (!password) {
        return next(
          createError(400, "Please provide username/email and password")
        );
      }

      const user = await User.findOne({ username: email });

      if (!user || !(await user.correctPassword(password))) {
        return next(createError(401, "Incorrect credentials!"));
      }

      const { token } = createToken(user.id, user.email);

      res.status(200).json({ token, user });
    } else {
      if (!email || !password) {
        return next(
          createError(400, "Please provide username/email and password")
        );
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
