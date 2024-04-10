//通过writefile建立文件
const fs = require("node:fs");

// const content = "Message is saved successfully!";

// fs.writeFile("test.txt", content, (err) => {
//   //这里绝对不能写成/test.txt，会无法读取
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(content);
//   }
// });

//通过readfile来读取文件
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
