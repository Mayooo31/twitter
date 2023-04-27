import mongoose, { Schema, Model, Document } from "mongoose";

interface ITweet extends Document {
  tweet: string;
  image: string;
  createdBy: Schema.Types.ObjectId;
  createdAt: Date;
  comments: Schema.Types.ObjectId[];
  likes: Schema.Types.ObjectId[];
  retweets: Schema.Types.ObjectId[];
}

const tweetSchema: Schema<ITweet> = new Schema({
  tweet: { type: String, required: true },
  image: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  likes: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  retweets: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
});

const Tweet: Model<ITweet> = mongoose.model("Tweet", tweetSchema);
export default Tweet;
