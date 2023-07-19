const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ["username"] }],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500), json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                {
                    model: Comment,
                    include: [{ model: User, attributes: ["username"] }],
                },
            ],
        });
        if (!postData) {
            res.status(404).json({ message: "No post found for that id" });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
        const updatePost = await Post.update(req.body, {
            where: { id: req.params.id },
        });

        if (!updatePost) {
            res.status(404).json({ message: "No post found for that id" });
            return;
        }
        res.status(200).json(updatePost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
      const postId = req.params.id;
  
      // Delete the comments associated with the post
      await Comment.destroy({
        where: { post_id: postId },
      });
  
      // Delete the post
      const deletedPost = await Post.destroy({
        where: { id: postId },
      });
  
      if (!deletedPost) {
        res.status(404).json({ message: "No post found for that id" });
        return;
      }
  
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;