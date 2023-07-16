// Importing the required dependencies
const router = require("express").Router();
const { Comment } = require("../../models/comment");
const withAuth = require("../../utils/auth");

// route for creating a new comment 
router.post("/", withAuth, async (req, res) => {
    try {
        // creating a new comment using the comment model
        const newComment = await Comment.create ({
            ...req.body,
            user_id: req.session.user_id,
        });
        // sending a JSON response with the new created comment
        res.status(200).json(newComment);
    } catch (err) {
        // sending a JSON response with the error if something goes wrong
        res.status(400).json(err);
    }
});

// exporting the router
module.exports = router;