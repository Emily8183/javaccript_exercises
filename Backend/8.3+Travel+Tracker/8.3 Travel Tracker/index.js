import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");

    let countries = [];
    result.rows.forEach((country) => {
      countries.push(country.country_code);
    });

    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
    });
  } catch (err) {
    console.log("Error executing query", err.stack);
    res.status(500).send("Internal Server Error");
  }
  // finally {
  //   db.end();
  // }
  //Must remove db.end() otherwise the database will close
});

//INSERT INTO visited_countries (country_code) VALUES ()
app.post("/add", async (req, res) => {
  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [req.body["country"]]
  );

  // select the country name from the countries table, find the country_code
  // $1为占位符

  // 代入req.body["country"],因为是array，所以外面要用[]
  // 得出的result 是根据用户输入的country name转化得到的country code,是postgres中的object形式

  // console.log(typeof result);

  //After found the country name, insert the country_code into the visited_countries table
  if (result.rows.length !== 0) {
    const data = result.rows[0];
    // result.rows 是从数据库查询中返回的结果行的数组。每一行都表示一个对象，其中包含数据库表中每一列的值。
    // data是指result.rows[]这个数组中的第一个值
    // console.log(data);
    // data的打印结果为{ country_code: 'IT' }
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      data.country_code,
    ]);
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

//注意：
// 1） 异步函数的正确用法，await 后面跟的是一个 Promise 对象，而不是一个 Promise 对象的返回值（之前我把res.render写到了await里面，是错误的）。
// 现在的写法，await确保在执行 res.render 之前查询完成，使得数据能够正确地传递到页面中。
// 2)注意 .forEach的用法
// 3）在这里就可以搭建countries数组，然后ejs中就可以遍历 countries数组了。
