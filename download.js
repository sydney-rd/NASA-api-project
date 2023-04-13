import fetch from "node-fetch";
import { promises as fsPromises } from "fs";

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

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=89")
  .then((response) => response.json())
  .then((data) => {
    const sortedData = sortAstronomyDataByDate(data); // Pass the data array as an argument
    return fsPromises.writeFile("./APOD.json", JSON.stringify(sortedData)); // Return the promise
  })
  .then(() => console.log("Data has been sorted and saved to APOD.json"))
  .catch((error) => console.error(error));
