const express = require("express");
const Post = require("./post.model");

const verifyAuthor = async (req, user) => {
  let post = await Post.findById(req.params.postId);
  if (post._id.toString() !== user.req.id) {
    return res
      .status(406)
      .json({ err: "You are not permitted to perform this operation" });
  }
};

//get all item endpoint
exports.getAllPost = async (request, response) => {
  const { title, body, published } = await Post.find({});
  response.status(200).json({ posts });
};

//create single item endpoint
exports.createPost = async (request, response) => {
  const { title, body, published } = request.body;
  const post = await Post.create({
    title,
    body,
    published,
  });
  response.status(200).json({ post });
}; 

//get single item endpoint
exports.getSinglePost = async (request, response) => {
  const { postId } = request.params;
  const post = await Post.findById(postId);
  response.status(200).json({ post });
};
//update endpoint
exports.updatePost = async (req, res) => {
  const { postId } = req.params;
  //checks
  await verifyAuthor();
  let post = await Post.findById(req.params.postId);
  if (post._id.toString() !== user.req.id) {
    return res
      .status(406)
      .json({ err: "You are not permitted to perform this operation" });
  }
  post = await Post.findByIdAndUpdate(
    postId,
    { ...req.body },
    {
      new: true,
    }
  );
  res.status(200).json({ post });
};

exports.deletePost = async (request, response) => {
  const { postId } = req.params;

  
  await verifyAuthor();
  let post = await Post.findById(req.params.postId);
  if (post._id.toString() !== user.req.id) {
    return res
      .status(406)
      .json({ err: "You are not permitted to perform this operation" });
  }
  await Post.findByIdAndDelete(postId);
  res.status(201).json({ msg: "Post deleted" });
};