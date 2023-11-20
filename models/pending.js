const {db} = require('../database/db.js');
const user = require('../models/user.js');
const {Sequelize , DataTypes} = require('sequelize')

const pending = db.define('pending',{
    id:{
        type:DataTypes.UUID,
        field : 'id',
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4,
    },
    userid:{
        type : DataTypes.UUID,
        field:'userid',
        defaultValue :DataTypes.UUIDV4,
    },
    friendid:{
        type : DataTypes.UUID,
        field:'friendid',
        defaultValue :DataTypes.UUIDV4,
    },
    
}
)
// user.hasMany(pending,{as:'pending',foreignKey:'userid',sourceKey:'id'})
pending.belongsTo(user,{as:'pendings',foreignKey:'friendid'})
user.hasMany(pending, {foreignKey: 'userid'})
// pending.hasMany(user,{as:'pendings',foreignKey:'id',sourceKey:'friendid'})
// pending.removeAttribute('id')
// pending.removeAttribute('userId')
module.exports = pending      