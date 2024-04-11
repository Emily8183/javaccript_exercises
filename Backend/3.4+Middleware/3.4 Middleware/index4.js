import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function generateName(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(generateName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  //读取html的来源
});

app.post("/submit", (req, res) => {
  res.send(`Your band name is:  ${bandName}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
