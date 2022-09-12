const express=require("express")
const Post= require("./post.model")

// const postRouter=router();

exports.getAllPost=async(request, response)=>{
    const {title, body, published}=await Post.find({})
 response.status(200).json({posts});
}
exports.createPost= async(request, response)=>{
     const { title, body, published } = request.body;
     const post = await Post.create({
       title,
       body,
       published,
     });
     response.status(200).json({ post });
   
}

