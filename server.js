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

// brings you to homepage
app.use(express.static("homeRoot"));

app.use("/", routes);

db.on("connected", () => {
    console.clear()
    console.log(chalk.blue("connected to Mongodb"))
    app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
})