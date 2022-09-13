const express = require("express");
const Post = require("./post.model");

// const postRouter=router();

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
}; //get single item endpoint
exports.getSinglePost = async (request, response) => {
  const { postId } = request.params;
  const post = await Post.findById(postId);
  response.status(200).json({ post });
};
//update endpoint
exports.updatePost = async (request, response) => {
  const {postId} = request.params;
  const post = await Post.findByIdAndUpdate(
    postId,
    { ...request.body },
    { new: true }
  );
  response.status(200).json({ post });
};

exports.deletePost = async (request, response) => {
  const { postId } = request.params;
  const post = await Post.findOneAndDelete(postId);
  response.status(200).json({ message: "Post deleted successsfully" });
};
