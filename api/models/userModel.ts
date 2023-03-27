import mongoose, { Schema, Model, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  username: string;
  nick?: string;
  email: string;
  password: string;
  createdAt: Date;
  birthYear: number;
  tweets: string[];
  following: string[];
  followers: string[];
  correctPassword(password: string): Promise<boolean>;
}

const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: [true, "User name is missing!"],
    unique: true,
    maxLength: 16,
  },
  nick: { type: String, maxLength: 16 },
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
    maxlength: [16, "Your password is too long, maximum is 16 character long!"],
  },
  birthYear: {
    type: Number,
    required: [true, "Your birth year is missing!"],
    min: [15, "Minimum age is 15!"],
  },
  tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
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

userSchema.methods.correctPassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User: Model<IUser> = mongoose.model("User", userSchema);
export default User;
