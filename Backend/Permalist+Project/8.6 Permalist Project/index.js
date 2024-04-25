import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "W4vTqMRgcuiERpa",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function showItemList() {
  const result = await db.query("SELECT * FROM items");
  let items = [];
  result.rows.forEach((item) => {
    items.push({
      id: item.id,
      title: item.title,
    });
  });
  return items;
}

app.get("/", async (req, res) => {
  const items = await showItemList();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

// app.post("/add", (req, res) => {
//   const item = req.body.newItem;
//   items.push({ title: item });
//   res.redirect("/");
// });

// app.post("/edit", (req, res) => {});

// app.post("/delete", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
