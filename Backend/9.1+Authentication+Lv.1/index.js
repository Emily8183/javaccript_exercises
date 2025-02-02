import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkUserExisting = await db.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    //check if the same email is existed

    if (checkUserExisting.rows.length > 0) {
      res.send("User already exists");
    } else {
      await db.query("INSERT INTO users (email,password) VALUES ($1, $2)", [
        email,
        password,
      ]);
      res.render("secrets.ejs");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const passwordDatabased = await db.query(
      "SELECT password FROM users WHERE email = ($1)",
      [email]
    );

    if (password === passwordDatabased.rows[0].password) {
      res.render("secrets.ejs");
    } else {
      res.send("Wrong password");
    }
  } catch (error) {
    console.log(error);
    res.send("User not found");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
