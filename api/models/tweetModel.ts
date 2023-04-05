import mongoose, { Schema, Model, Document } from "mongoose";

interface ITweet extends Document {
  tweet: string;
  image: string;
  createdBy: Schema.Types.ObjectId;
  createdAt: Date;
  comments: number;
  likes: number;
  retweets: number;
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
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  retweets: {
    type: Number,
    default: 0,
  },
});

const Tweet: Model<ITweet> = mongoose.model("Tweet", tweetSchema);
export default Tweet;
