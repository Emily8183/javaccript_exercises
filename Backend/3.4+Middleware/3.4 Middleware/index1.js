import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  // __dirname is only used when the it's static file
});

app.post("/submit", (req, res) => {
  const formData = req.body;
  console.log(formData);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
