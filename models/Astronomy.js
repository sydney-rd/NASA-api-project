// schema outline.
import mongoose, { Schema } from "mongoose";

let Astronomy = new Schema({
    imgDate: String,
    imgTitle: String,
    imgExplanation: String,
    imgCredit: String,
    imgURL: String   
});

export default mongoose.model("astronomyPics", Astronomy);