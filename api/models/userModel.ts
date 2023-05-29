import mongoose, { Schema, Model, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  profilePhoto?: string;
  secondPhoto?: string;
  username: string;
  nick?: string;
  about: string;
  email: string;
  password: string;
  createdAt: Date;
  age: number;
  tweets: Schema.Types.ObjectId[];
  bookmarks: Schema.Types.ObjectId[];
  following: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  correctPassword(password: string): Promise<boolean>;
}

const userSchema: Schema<IUser> = new Schema({
  profilePhoto: { type: String, default: "" },
  secondPhoto: { type: String, default: "" },
  about: { type: String, default: "" },
  nick: { type: String, maxLength: 24, default: "" },
  username: {
    type: String,
    required: [true, "User name is missing!"],
    unique: true,
    maxLength: 16,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Your email is missing!"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Your password is missing!"],
    minlength: [6, "Your password is too short, minimum is 6 character long!"],
  },
  age: {
    type: Number,
    required: [true, "Your birth year is missing!"],
    min: [15, "Minimum age is 15!"],
  },
  tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);

    next();
  } else {
    return next();
  }
});

userSchema.methods.correctPassword = async function (
  candidatePassword: string
) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User: Model<IUser> = mongoose.model("User", userSchema);
export default User;
