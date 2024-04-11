/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import qr from "qr-image";
import inquirer from "inquirer";
import fs from "node:fs";

inquirer
  .prompt([
    {
      message: "what URL do you have?",
      name: "url",
      //The name to use when storing the answer in the answers hash.
    },
  ])
  .then((answers) => {
    console.log(answers.url);
    let qr_svg = qr.image(answers.url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    y9;

    fs.writeFile("URL.txt", answers.url, (err) => {
      if (err) {
        console.error("Error writing URL to file:", err);
      } else {
        console.log("URL saved to URL.txt");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("failed");
    } else {
      console.error("Error:", error);
    }
  });
