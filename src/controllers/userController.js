const User = require('../models/userModel');

module.exports = class UserCtrl {
    static async getUsers(req, res) {
        try {
            const users = await User.findAll();
            res.send(users);
            //console.log(users);
        } catch (error) {
            res.status(500).send(error.message);
            console.log(error.message);
        }
    }

    static async createUser(req, res) {
        try {
            const response = await User.create({ firstname: "Jane", lastname: "Doe", age: 45, email: 'asd@qwerty.com' });
            res.send(response);
            //console.log(response);
        } catch (error) {
            res.status(500).send(error.message);
            console.log(error.message);
        }
    }
}
