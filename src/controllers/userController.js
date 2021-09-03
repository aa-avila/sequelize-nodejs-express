const User = require('../models/userModel');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
        //console.log(users);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
}

const createUser = async (req, res) => {
    try {
        const response = await User.create({ firstname: "Jane", lastname: "Doe", age: 45, email: 'asd@qwerty.com' });
        res.send(response);
        //console.log(response);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
}

module.exports = {
    getUsers,
    createUser
}
