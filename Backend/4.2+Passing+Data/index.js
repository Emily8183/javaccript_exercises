import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
//this is necessary for bodyParser to work (in order to get the input from users)

app.get("/", (req, res) => {
  res.render(
    "index.ejs"
    // to display the main page
  );
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", {
    fullNameLength: req.body["fName"].length + req.body["lName"].length,
  });
  //to display the full name's length
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
