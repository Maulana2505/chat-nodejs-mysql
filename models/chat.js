const { Sequelize, DataTypes } = require('sequelize')
const { db } = require('../database/db.js');
<<<<<<< HEAD

=======
const user = require('../models/user.js');
const friend = require('./friends.js');
>>>>>>> 3c62756 (Baru)
const chat = db.define('chat', {
    id: {
        type: DataTypes.UUID,
        field: 'id',
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
<<<<<<< HEAD
    senderId: {
=======
    senderid: {
>>>>>>> 3c62756 (Baru)
        field: 'senderid',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
<<<<<<< HEAD
    receiverId: {
=======
    receiverid: { 
>>>>>>> 3c62756 (Baru)
        field: 'receiverid',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    massage: {
        field: 'massage', type: DataTypes.STRING
    }
<<<<<<< HEAD
})
=======
     
}, { Sequelize })
>>>>>>> 3c62756 (Baru)

module.exports = chat