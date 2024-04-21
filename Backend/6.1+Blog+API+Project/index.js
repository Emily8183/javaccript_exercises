import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

//Step:
// 1) apply bodyParser to app.use
// 2) see if there're any API requiring API
// 3) build app.get() etc by using different syntax
// 4) res.json (to convert to JSON string)

// In-memory data store (building my own API)

app.use(bodyParser.json());
//当req.body 包含客户端发送的 JSON 数据时使用
app.use(bodyParser.urlencoded({ extended: true }));

//GET All posts
app.get("/", (req, res) => {
  res.json(posts);
});
//如果get不到数据，可能没有添加app.use(bodyParser.json())解析req.body;

//GET a specific post by id
app.get("/post/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foundPost = posts.find((post) => post.id === id);

  if (foundPost) {
    res.json(foundPost);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

//POST a new post
app.post("/post", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: req.body.date,
    // 键的名称来源于posts[]
  };
  //Here's the full URL, notice each key-value pair connects by "&"
  // http://localhost:4000/post/?inputTitle=BA&inputContent=BAContent&inputAuthor=BAA&inputDate=BADate
  posts.push(newPost);
  res.json(newPost);
});

//PATCH a post when you just want to update one parameter
app.patch("/post/:id", (req, res) => {
  const findId = parseInt(req.params.id);

  const replacedPost = posts.find((post) => post.id === findId);

  if (replacedPost) {
    if (req.body.title) {
      replacedPost.title = req.body.title;
    }
    if (req.body.content) {
      replacedPost.content = req.body.content;
    }
    if (req.body.author) {
      replacedPost.author = req.body.author;
    }
    if (req.body.date) {
      replacedPost.date = req.body.date;
    }

    res.json(replacedPost);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];

let lastId = 3;

//CHALLENGE 5: DELETE a specific post by providing the post id.

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
