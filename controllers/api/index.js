// importing required dependencies
const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

// setting up routes
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

// exporting the router
module.exports = router;
