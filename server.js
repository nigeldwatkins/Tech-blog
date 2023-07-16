// Importing the required dependencies 
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphb = require("express-handlebars");
require('dotenv').config(); // loading environment variable from dotenv file


// Creating instance of the express app
const app = express();

// Setting port
const PORT = process.env.PORT || 3001;

// session configuration object
const sess = {
    secret: process.env.SESSION_SECRET, // secret key used to sign the session ID cookie
    cookie: {}, // config option for the session cookie
    resvae: false, // flag indicating whether to re-save the session for each request
    saveUninitialized: true, // flag indicating whether to save uninitialized sessions to the store
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("handlebars", exphb.engine);
app.set("view engine", "handlebars");

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        store: new SequelizeStore({ db: sequelize }),
        resave: false,
        saveUninitialized: false,
    })
);

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});