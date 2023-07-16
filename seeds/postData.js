const { Post } = require("../models");

const postData = [
  {
    title: "First Blog Post",
    content: "I love tech everything about it.",
    user_id: 1,
  },
  {
    title: "Second Blog Post",
    content: "What is todays date?",
    user_id: 2,
  },
  {
    title: "Third Blog Post",
    content: "This is the best tech blog for key information.",
    user_id: 3,
  },
  {
    title: "Fourth Blog Post",
    content: "How many times have you typed lgtm and actually looked over the code?",
    user_id: 4,
  },
  {
    title: "Fifth Blog Post",
    content: "Code is stressful.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;