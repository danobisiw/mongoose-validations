const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const postRouter = require("./modules/posts/post.route");

const app = express();

app.use(express.json());
app.use("/posts", postRouter);

async function start() {
  await dbConnect();
  app.listen(4000, () => {
    console.log("Server listening on http://localhost:4000");
  });
}

start();
