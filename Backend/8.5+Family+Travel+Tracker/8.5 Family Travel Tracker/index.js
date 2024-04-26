import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Family Travel Tracker",
  password: "W4vTqMRgcuiERpa",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

// const colors = [
//   "red",
//   "green",
//   "yellow",
//   "olive",
//   "orange",
//   "teal",
//   "blue",
//   "violet",
//   "purple",
//   "pink",
// ];

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

// show each family members' map
//TODO: to chanage user, color, countries, and countries_length to the current user
app.get("/", async (req, res) => {
  const countries = await checkVisisted();

  const usersData = await db.query(
    "SELECT id, name, color FROM family_members"
  );
  const users = usersData.rows.map((user) => {
    return {
      id: user.id,
      name: user.name,
      color: user.color,
    };
  });

  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: "teal",
  });
});

//to show the map of the selected countries
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        //TODO: insert into a particular family member's visited country list
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

//to change the current user
app.post("/user", async (req, res) => {
  const user = req.body["user"];
  currentUserId = user;
  res.redirect("/");
});

//to add new family member on new.ejs
app.post("/new", async (req, res) => {
  //insert the family member to the name database (id, name, color)
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
