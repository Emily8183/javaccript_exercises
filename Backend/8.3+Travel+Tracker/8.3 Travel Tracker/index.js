import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "W4vTqMRgcuiERpa",
  port: 5432,
});

db.connect();

let visited_countries = [];

db.query("SELECT * FROM visited_countries", (err, res) => {
  if (err) {
    console.log("Error executing query", err.stack);
  } else {
    visited_countries = res.rows;
    console.log(visited_countries);
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
