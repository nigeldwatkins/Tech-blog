// Importing required dependencies
const router = require("express").Router();
const apiRoutes = require('./api');
const homeRoutes = require("./home-routes");

// setting up routes
router.use("/", homeRoutes);
router.use('/api', apiRoutes);


// exporting the router
module.exports = router;