import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const bearerToken = "";
const config = {
  headers: { Authorization: `Bearer ${bearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

//GET
app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

//POST
app.post("/post-secret", async (req, res) => {
  try {
    const response = await axios.post(
      API_URL + "/secrets/",

      // {
      //   secret: req.body.secret,
      //   score: req.body.score,
      // },
      req.body,
      config
    );

    const result = response.data;
    const jsonData = JSON.stringify(result);

    res.render("index.ejs", { content: jsonData });
  } catch (error) {
    res.render("index.ejs", { content: error.message });
  }
});

//PUT
// PUT, PATCH, DELETE 3个方法因为源代码有问题，不能测试成功。以下代码应该是正确的
//源代码解决方法：把老师的API放到自己的local server，每次测试前领取一个新的token （https://gale.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/38912020?couponCode=ST7MT41824#questions/20424464/）

app.post("/put-secret", async (req, res) => {
  try {
    const response = await axios.put(
      API_URL + "/secrets/" + req.body.id,
      req.body,
      //req.body = {
      //   secrect: "whatever user typed",
      //   score: 4
      // }
      config
    );

    const result = response.data;

    const jsonData = JSON.stringify(result);

    res.render("index.ejs", { content: jsonData });
  } catch (error) {
    res.render("index.ejs", { content: error.message });
  }
});

//PATCH
app.post("/patch-secret", async (req, res) => {
  try {
    const response = await axios.patch(
      API_URL + "/secrets/" + req.body.id,
      req.body,
      config
    );

    const result = response.data;

    const jsonData = JSON.stringify(result);

    res.render("index.ejs", { content: jsonData });
  } catch (error) {
    res.render("index.ejs", { content: error.message });
  }
});

//DELETE
app.post("/delete-secret", async (req, res) => {
  try {
    const response = await axios.delete(
      API_URL + "/secrets/" + req.body.id,
      config
    );

    const result = response.data;

    const jsonData = JSON.stringify(result);

    res.render("index.ejs", { content: jsonData });
  } catch (error) {
    res.render("index.ejs", { content: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
