"use strict";

const Models = require("../models");

const createPost = (req, res) => {
  Models.Post.create(req.body)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const likePost = (req, res) => {
  Models.PostLike.create({
    postid: req.params.postid,
    userid: req.body.userid,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUserPosts = (req, res) => {
  Models.Post.findAll({
    where: { userid: req.params.uid },
    include: [{ model: Models.User, attributes: ["username", "email"] }],
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const addComment = (req, res) => {
  Models.Comment.create({
    ...req.body,
    postid: req.params.postid,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  createPost,
  likePost,
  getUserPosts,
  addComment,
};
