import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function calculateLength(fName, lName) {
  // to calculate the full name's length
}

app.get("/", (req, res) => {
  // to display the default message
});

app.post("/submit", (req, res) => {
  //to display the full name's length
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
