import { Request } from "express";

export interface ExtendedReq extends Request {
  userData?:
    | {
        id: string;
        email: string;
      }
    | undefined;
  file?: any;
  files?: any;
}
