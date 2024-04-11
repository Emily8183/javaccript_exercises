import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let currentDay = new Date().getDay();

  let type = "Weekend";
  let adv = "Enjoy your weeekend!";

  if (currentDay !== 0 || currentDay !== 6) {
    type = "workday";
    adv = "get to work!";
  }

  res.render("index", {
    dayType: type,
    advice: adv,
  });
  //res.render()will look in a views folder for the view. So you only have to define pages/index since the full path is views/pages/index.
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
