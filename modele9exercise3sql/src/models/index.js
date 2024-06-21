"use strict";
const Comment = require("./comment");
const Post = require("./post");
const PostLike = require("./postLike");
const User = require("./user"); //require the model

async function init() {
  await User.sync(); // sync the model
  await Post.sync();
  await Comment.sync();
  await PostLike.sync();

  User.hasMany(Post, { foreignKey: "userid" });
  Post.belongsTo(User, { foreignKey: "userid" });

  Post.hasMany(Comment, { foreignKey: "postid" });
  Comment.belongsTo(Post, { foreignKey: "postid" });

  Comment.belongsTo(User, { foreignKey: "userid" });
  Post.belongsToMany(User, { through: PostLike, foreignKey: "postid" });
  User.belongsToMany(Post, { through: PostLike, foreignKey: "userid" });

  // also sync any extra models here
}

init();

module.exports = {
  User, // export the model
  Post,
  Comment,
  PostLike,
  // also export any extra models here
};
