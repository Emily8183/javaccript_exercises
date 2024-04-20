// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    // axios.get() returns a Promise. Can either use .then() or async/await

    // const secretJSON = JSON.stringify(result.data.secret);
    // const userJSON = JSON.stringify(result.data.username);

    const secretJSON = result.data.secret;
    const userJSON = result.data.username;
    // passing the secret and user directly as properties of the object passed to res.render, so we don't need to use .JSON.stringify()

    res.render("index.ejs", {
      secret: secretJSON,
      user: userJSON,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500).send({ message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
