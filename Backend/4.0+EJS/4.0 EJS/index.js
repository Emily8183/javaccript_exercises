import express from "express";
import ejs from "ejs";

const app = express();

const port = 3000;

app.set("view engine", "ejs");

// function weatherAdvice (req, res, next) {
//     res.render("index.ejs",
//     {dayType: req.body["dayType"],
//     advice:req.body["advice"] })
//     next();
//   }

// app.use(weatherAdvice);

app.get("/", (req, res) => {
  res.render("index");
  //res.render()will look in a views folder for the view. So you only have to define pages/index since the full path is views/pages/index.
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
