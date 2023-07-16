const { User } = require("..//models");

const userData = [
    {
        username: "",
        email: "hiuser01@dummy.com",
        password: "1234password",
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;