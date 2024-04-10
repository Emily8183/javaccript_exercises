import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/contact", (req, res) => {
  res.send("<h1>my phone number</h1>");
});

app.get("/about", (req, res) => {
  res.send("My introduction");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
