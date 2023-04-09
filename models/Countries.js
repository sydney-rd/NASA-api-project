// schema outline.
import mongoose, { Schema } from "mongoose";

let Countries = new Schema({
    name: String,
});

export default mongoose.model("country", Countries);