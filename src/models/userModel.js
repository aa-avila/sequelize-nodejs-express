/*********************************************************** */
/** Extendiendo Model (class) */

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'user'
});

module.exports = User;


/*********************************************************** */
/** Usando sequelize.define: */

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../database/db');

// const User = sequelize.define('user', {
//     // Model attributes are defined here
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     firstname: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     lastname: {
//         type: DataTypes.STRING
//         // allowNull defaults to true
//     },
//     age: DataTypes.INTEGER,
//     email: DataTypes.STRING
// }, {
//     // Other model options go here
// });

// module.exports = User;


