const { db } = require('../database/db.js');
const user = require('../models/user.js');
const { Sequelize, DataTypes } = require('sequelize');
<<<<<<< HEAD
=======
const chat = require('./chat.js');
>>>>>>> 3c62756 (Baru)


const friend = db.define('friends', {
    id:{
        type:DataTypes.UUID,
        field : 'id',
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4,
        
    },
    userid: {
        type: DataTypes.UUID,
        field: 'userid',
        defaultValue: DataTypes.UUIDV4,
        
    },
    friendid: {
        type: DataTypes.UUID,
        field: 'friendid',
        defaultValue: DataTypes.UUIDV4,
    },
}) 
   
// friend.belongsTo(user,{as:'friend',through:'friend',foreignKey:'userid',sourceKey:'userid'}) 
friend.belongsTo(user,{as:'friend',foreignKey:'friendid'})
// user.belongsTo(friend,{as:'f',foreignKey:'id'})
// friend.hasMany(user,{foreignKey: 'friendsid'})
user.hasMany(friend, {foreignKey: 'userid'})
// friend.belongsTo(user, {foreignKey: 'user_id'})

// friend.removeAttribute('id')
module.exports = friend
