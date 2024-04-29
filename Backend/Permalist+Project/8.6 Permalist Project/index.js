import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items1 = [];
let items2 = [];
// let lastFetchedItemId = 0;

// Return the items since the last fetched item
// async function fetchNewItems() {
//   const result = await db.query(
//     "SELECT * FROM items WHERE id > $1 ORDER BY id ASC",
//     [lastFetchedItemId]
//   );

//   result.rows.forEach((item) => {
//     items.push({
//       id: item.id,
//       title: item.title,
//     });
//   });
// }

async function showTheLastItem() {
  const result = await db.query(
    "SELECT * FROM items WHERE id=(SELECT MAX(id) FROM items)"
  );

  items1 = result.rows.map((item) => ({
    id: item.id,
    title: item.title,
  }));

  return items1;
}

async function showExistingList() {
  const result = await db.query("SELECT * FROM items ORDER BY id DESC");
  items2 = result.rows.map((item) => ({
    id: item.id,
    title: item.title,
  }));
  return items2;
}

app.get("/", async (req, res) => {
  const item1 = await showTheLastItem();
  const items2 = await showExistingList();

  res.render("index.ejs", {
    listTitle: "Today",
    listItems: [...items1, ...items2],
  });
});

app.post("/add", async (req, res) => {
  const newItem = req.body.newItem;

  await db.query("INSERT INTO items (title) VALUES ($1)", [newItem]);
  // items.push({ title: item }); <= we don't need this since we want to save the data in SQL not into a local array

  res.redirect("/");
});

app.post("/edit", (req, res) => {});

// app.post("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
