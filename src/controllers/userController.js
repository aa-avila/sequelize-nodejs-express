const User = require('../models/userModel');
/**
 * Para todos getAll, debe haber la posibilidad de ordenar los resultados segun createdAt,
 *  en caso de que se defina en la query el parametro 'order' ASC o DESC
 * */

// Get all users
const getUsers = async (req, res) => {
    try {
        const firstname = req.query.firstname;
        const lastname = req.query.lastname;

        let users = [];

        // 1)
        // Si no se especifica filtro por nombre o apellido, trae todos:
        if (firstname === undefined && lastname === undefined) {
            users = await User.findAll();

            res.send(users);
            return;
        }

        // 2)
        // Si existe nombre en la query, filtra por nombre
        if (firstname) {
            users = await User.findAll({
                where: {
                    firstname: firstname
                }
            });

            res.send(users);
            return;
        }

        // 3)
        // Filtra por apellido
        if (lastname) {
            users = await User.findAll({
                where: {
                    lastname: lastname
                }
            });

            res.send(users);
            return;
        }

    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
}

// (busqueda por nombre) Get todos los que contengan el valor "x" en el campo "name"
const getUsersByName = async (req, res) => {
    try {
        const name = req.params.name;



        res.send(users);
        //console.log(users);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
}

// (filtrar por edad) Get todos los que contengan el valor "x" en el campo "age"



// Get one user by ID


// Create user
const createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, age } = req.body;

        const response = await User.create({ firstname: firstname, lastname: lastname, age: age, email: email });

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
