//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let userPassword = "";
//can set up a boolean to authorize the password: var userIsAuthorized = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  userPassword = req.body["password"];
  //   "password" is from the attribute name;
  //   if (userPassword === "ILoveProgramming") {
  //     userIsAuthorized = true;
  //   }
  next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userPassword === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //OR: res.redirect("/");
  }
  //OR: userIsAuthorized if-else situration;
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
