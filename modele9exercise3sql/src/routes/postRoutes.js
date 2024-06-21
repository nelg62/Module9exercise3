const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.post("/create", (req, res) => {
  Controllers.postController.createPost(req, res);
});

router.post("/:postid/like", (req, res) => {
  Controllers.postController.likePost(req, res);
});

router.get("/user/:uid", (req, res) => {
  Controllers.postController.getUserPosts(req, res);
});

router.post("/:postid/comments", (req, res) => {
  Controllers.postController.addComment(req, res);
});

module.exports = router;
