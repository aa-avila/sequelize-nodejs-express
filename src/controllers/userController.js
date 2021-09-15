const User = require('../models/userModel');
/**
 * Para todos getUsers, debe haber la posibilidad de ordenar los resultados segun createdAt,
 *  en caso de que se defina en la query el parametro 'order' ASC o DESC
 * */

// Get all users
const getUsers = async (req, res) => {
    try {
        const firstname = req.query.firstname;
        const lastname = req.query.lastname;
        const age = req.query.age;
        const order = req.query.order;

        let users = [];

        // 1)
        // Si no se especifica filtro por nombre o apellido, trae todos:
        if (firstname === undefined && lastname === undefined) {
            if (order) {
                users = await User.findAll({
                    order: [['createdAt', order]] // order debe ser 'ASC' o 'DESC'
                });
            } else {
                users = await User.findAll();
            }

            res.send(users);
            return;
        }

        // 2)
        // Si existe nombre en la query, filtra por nombre
        if (firstname) {
            if (order) {
                users = await User.findAll({
                    where: {
                        firstname: firstname
                    },
                    order: [['createdAt', order]]
                });
            } else {
                users = await User.findAll({
                    where: {
                        firstname: firstname
                    }
                });
            }

            res.send(users);
            return;
        }

        // 3)
        // Filtra por apellido
        if (lastname) {
            if (order) {
                users = await User.findAll({
                    where: {
                        lastname: lastname
                    },
                    order: [['createdAt', order]]
                });
            } else {
                users = await User.findAll({
                    where: {
                        lastname: lastname
                    }
                });
            }

            res.send(users);
            return;
        }

        // 4)
        // Filtra por edad
        if (age) {
            if (order) {
                users = await User.findAll({
                    where: {
                        age: age
                    },
                    order: [['createdAt', order]]
                });
            } else {
                users = await User.findAll({
                    where: {
                        age: age
                    }
                });
            }

            res.send(users);
            return;
        }

    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
}



// Get one user by ID
const getUser = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findAll({
            where: {
                id: id
            }
        });

        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
}


// Create user
const createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, age } = req.body;

        const response = await User.create({ firstname: firstname, lastname: lastname, age: age, email: email });

        res.send(response);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
}

// Update user (by ID, uno o mas campos)
const updateUser = async (req, res) => {
    try {
        const { firstname, lastname, email, age } = req.body;
        const id = req.params.id;

        // Traemos data actual desde BD
        const userData = await User.findAll({
            where: {
                id: id
            }
        });

        // Reemplaza solo los campos nuevos existentes
        if (firstname) {
            userData.firstname = firstname;
        }

        if (lastname) {
            userData.lastname = lastname;
        }

        if (email) {
            userData.email = email;
        }

        if (age) {
            userData.age = age;
        }

        //query
        const response = await User.update(userData, {
            where: {
                id: id
            }
        });

        res.send(response);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
}

// Delete user (by ID)
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        // DELETE query
        const response = await User.destroy({
            where: {
                id: id
            }
        });

        // Comprueba resultado de la operacion
        if (response == 1) {
            res.send('Usuario eliminado');
        }
        if (response == 0) {
            throw new Error('No se pudo eliminar');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
