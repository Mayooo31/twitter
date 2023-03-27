import { Request, Response, NextFunction } from "express";

const catchAsync = <T extends (req: Request, res: Response, next: NextFunction) => Promise<any>>(fn: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
