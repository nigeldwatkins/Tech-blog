const { User } = require("../models");

const userData = [
    {
        username: "hiu1",
        email: "hiuser01@dummy.com",
        password: "1234password",
    },
    {
        username: "lordtech",
        email: "lordtech@dummy.com",
        password: "1111password",
    },
    {
        username: "lbj23",
        email: "lbj23@dummy.com",
        password: "2222password",
    },
    {
        username: "Mikal",
        email: "missme@dummy.com",
        password: "3333password",
    },
    {
        username: "nerdtech",
        email: "technerd@dummy.com",
        password: "4444password",
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;