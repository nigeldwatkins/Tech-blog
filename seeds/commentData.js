const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "This is one of my favorites. Ty",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "Its good but it's not the best",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: "No way you think that",
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: "Where can I find the best tech article?",
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: "Techwiz.com",
        user_id: 1,
        post_id: 2,
    },
    {
        comment_text: "No way, go to Ilovetech.org, its better",
        user_id: 3,
        post_id: 2,
    },
    {
        comment_text: "Keyboard warriors?",
        user_id: 5,
        post_id: 1,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;