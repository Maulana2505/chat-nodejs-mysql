const { Sequelize, DataTypes } = require('sequelize')
const { db } = require('../database/db.js');
const chat = db.define('chat', {
    id: {
        type: DataTypes.UUID,
        field: 'id',
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    senderId: {
        field: 'senderid',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    receiverId: {
        field: 'receiverid',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    massage: {
        field: 'massage', type: DataTypes.STRING
    }
})

module.exports = chat