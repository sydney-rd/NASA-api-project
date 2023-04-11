import db from "../db/connection.js";
import data from "../APOD.json" assert { type: "json"}
import APOD from "../models/Astronomy.js"; // stands for Astronomy Picture of Day
import chalk from "chalk";

let astronomyData = data.map(item => {
    return {
    date: item.date,
    title: item.title,
    explanation: item.explanation,
    credit: item.copyright,
    url: item.url
    }
});



let insertData = async() => {
    try {
        await APOD.deleteMany({});
        await APOD.create(astronomyData);
        console.log("seeded");
        db.close();
    }
    catch (error) {
        console.log(chalk.red(error))
    }
}

insertData();