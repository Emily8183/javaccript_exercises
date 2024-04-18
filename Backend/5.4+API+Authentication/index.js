import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

// for the safety in github, all the following auth details have been removed. All tests are passed.
const username = "";
const password = "";
const apiKey = "";
const bearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

// noAuth
app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/random"
    );
    const result = response.data;
    const jsonData = JSON.stringify(result);
    // to convert from JSON to JS object

    res.render("index.ejs", { content: jsonData });
  } catch (error) {
    res.status(404).render("index.ejs", { content: error.response.data });
  }
});

//basicAuth by username and password
app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/all?page=2",
      {
        auth: {
          username,
          password,
        },
      }
    );
    const result = response.data;
    const jsonData = JSON.stringify(result);

    res.render("index.ejs", { content: jsonData });
  } catch (error) {
    res.render("index.ejs", { content: "wrong password or username" });
  }
});

//apiKey (using Axios directly without using the async/await syntax.  Pay attention to where to put the res.render())
app.get("/apiKey", (req, res) => {
  axios
    .get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${apiKey}`)
    .then(function (response) {
      console.log(response.data);

      res.render("index.ejs", { content: JSON.stringify(response.data) });
    })
    .catch(function (error) {
      console.error(error);
    });
});

//bearerToken (pay attention to where to put the token and .then())
app.get("/bearerToken", (req, res) => {
  axios
    .get("https://secrets-api.appbrewery.com/secrets/42", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
    .then(function (response) {
      console.log(response.data);

      res.render("index.ejs", { content: JSON.stringify(response.data) });
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
