import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const username = "";
const password = "";
const apiKey = "";
// const yourBearerToken = "";

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

//apiKey (using Axios directly without using the async/await syntax. )
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

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
