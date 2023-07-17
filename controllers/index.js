// Importing required dependencies
const router = require("express").Router();
const userRoutes = require("./api/user-routes");
const postRoutes = require("./api/post-routes");
const commentRoutes = require("./api/comment-routes");
const homeRoutes = require("./home-routes");

// setting up routes
router.use("/", homeRoutes);
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);


// exporting the router
module.exports = router;