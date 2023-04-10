// supposed to be the fetch request for api

import fetch from "node-fetch";
import {promises as fsPromises} from "fs";

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=50")
    .then(response => response.json())
    .then(data => fsPromises.writeFile("./APOD.json",
    JSON.stringify(data)));