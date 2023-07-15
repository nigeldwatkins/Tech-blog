// Importing the Sequelize library
const Sequelize = require('sequelize');

// Loading environment variables from a .env file
require('dotenv').config();

// If the JAWSDB_URL environment variable is available the Sequelize instance will be created
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost', // Database host
    dialect: 'mysql', // database dialect (mysql)
    dialectOptions: {
        decimalNumbers: true, // Supports decimal numbers
    },
});

// Exporting the sequelize instance for use
module.exports = sequelize;