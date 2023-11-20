const { Sequelize, DataTypes } = require('sequelize')
const { db } = require('../database/db.js')

const user = db.define('user', {
    id: {
        field: 'id',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    username: { field: 'username', type: DataTypes.STRING, },
    email: { field: 'email', type: DataTypes.STRING, },
    password: { field: 'password', type: DataTypes.STRING, },
    imgprofile: { field: 'imgprofile', type: DataTypes.STRING, },
},
    { Sequelize })
<<<<<<< HEAD
 
=======

>>>>>>> 3c62756 (Baru)

module.exports = user