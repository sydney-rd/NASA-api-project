import db from "./db/connection.js";
import routes from "./routes/index.js";
import express from "express";
import cors from "cors";
import logger from "morgan"; 
import chalk from "chalk";

const app = express();
const PORT = process.env.PORT || 3000;

// set up middleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", routes);

// brings you to homepage
app.use(express.static("homeRoot"));

db.on("connected", () => {
    console.clear()
    console.log(chalk.blue("connected to Mongodb"))
    app.listen(PORT, () => {
        process.env.NODE_ENV === "production" ? console.log(`express server running in prod on port ${PORT}\n\n`) : console.log(`express server running in development on: ${PORT}`)
    })
})