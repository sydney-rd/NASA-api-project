import db from "../db/connection.js";
import data from "../APOD.json" assert { type: "json" };
import APOD from "../models/Astronomy.js"; // stands for Astronomy Picture of Day
import chalk from "chalk";

let astronomyData = data.map((item) => {
  return {
    date: item.date,
    title: item.title,
    explanation: item.explanation,
    credit: item.copyright,
    url: item.url,
  };
});

let insertData = async () => {
  try {
    await APOD.deleteMany({});
    let scrubData = sortAstronomyDataByDate(astronomyData);
    await APOD.create(scrubData);
    console.log("seeded");
    db.close();
  } catch (error) {
    console.log(chalk.red(error));
  }
};

insertData();

function sortAstronomyDataByDate(data) {
  // Convert date strings to Date objects
  data.forEach((item) => {
    item.date = new Date(item.date);
  });

  // Sort data by date in ascending order
  data.sort((a, b) => a.date - b.date);

  // Convert Date objects back to date strings
  data.forEach((item) => {
    item.date = item.date.toISOString().substring(0, 10);
  });

  return data;
}
