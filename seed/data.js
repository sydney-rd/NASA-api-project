import mongoose from "mongoose"
// import connection from "../db/connection.js"
import data from "../APOD.json" assert { type: "json"}
import APOD from "../models/Astronomy.js" // stands for Astronomy Picture of Day
import chalk from "chalk";

let astronomyData = data.map(item => {
    const apod = {};
    apod.imgTitle = item.imgTitle;
    apod.imgDate = item.imgDate;
    apod.imgExplanation = item.imgExplanation;
    apod.imgCredit = item.imgCredit;
    apod.imgURL = item.imgUrl;
});


APOD
    .deleteMany({})
    .then(() => APOD.create(astronomyData))
    .then(() => console.log("done!"))
    .then(() => mongoose.disconnect())
    .catch(error => console.log(chalk.red(`error: ${error}`)))