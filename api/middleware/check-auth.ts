import { Request, Response, NextFunction } from "express";
import createError from "../utils/error";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthRequest extends Request {
  userData?: {
    id: string;
    email: string;
  };
  headers: {
    authorization?: string;
  };
}

interface DecodedToken extends JwtPayload {
  id: string;
  email: string;
}

export const checkAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return next(createError(401, "Authentication failed!"));

  const decodedToken: DecodedToken = jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as DecodedToken;

  req.userData = { id: decodedToken.id, email: decodedToken.email };
  next();
};
