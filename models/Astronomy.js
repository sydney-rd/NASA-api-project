// schema outline.
import mongoose, { Schema } from "mongoose";

let Astronomy = new Schema({
  date: String,
  title: String,
  explanation: String,
  credit: String,
  url: String,
});

export default mongoose.model("astronomyPics", Astronomy);
