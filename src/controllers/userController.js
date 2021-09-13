const User = require('../models/userModel');
/**
 * Para todos getAll, debe haber la posibilidad de ordenar los resultados segun createdAt,
 *  en caso de que se defina en la query el parametro 'order' ASC o DESC
 * */

// Get all users
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

// (busqueda por nombre) Get todos los que contengan el valor "x" en el campo "name"

// (filtrar por edad) Get todos los que contengan el valor "x" en el campo "age"



// Get one user by ID


// Create user
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

// Update user (by ID, uno o mas campos)

module.exports = {
    getUsers,
    createUser
}
