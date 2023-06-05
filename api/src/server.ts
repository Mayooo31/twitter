import app from "./index";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT!;
const DB = process.env.DATABASE!;

mongoose.connect(DB).then(() => console.log("DB connection successful! 👍"));

app.listen(port, () => console.log(`App is running on port ${port}. 😁`));
