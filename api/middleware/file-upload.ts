import { randomUUID } from "crypto";
import { RequestHandler } from "express";
import multer from "multer";

// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

const MIME_TYPE_MAP: { [key: string]: string } = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const fileUpload: RequestHandler = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    filename: (req: any, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, req.userData.id + "-" + file.originalname + "." + ext);
    },
  }),
  fileFilter(req, file, cb) {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error: any = isValid ? null : new Error("Invalid mime type!");
    cb(error, isValid);
  },
}).fields([
  { name: "profilePhoto", maxCount: 1 },
  { name: "secondPhoto", maxCount: 1 },
]);

export default fileUpload;
