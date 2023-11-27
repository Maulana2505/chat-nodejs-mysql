const {db} = require('../database/db.js');
const user = require('../models/user.js');
const {Sequelize , DataTypes} = require('sequelize')

const friendreq = db.define('friendrequest',{
    id:{
        type:DataTypes.UUID,
        field : 'id',
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4,
        
    },
    userid:{
        field:'userid',
        type : DataTypes.UUID,
        defaultValue :DataTypes.UUIDV4,
    },
    friendreqid:{
        type : DataTypes.UUID,
        field:'friendreqid',
        defaultValue :DataTypes.UUIDV4,
    },
})
// db.sync({force:true})    
db.sync()
friendreq.belongsTo(user,{as:'friendreq',foreignKey:'friendreqid'}) 
user.hasMany(friendreq,{foreignKey: 'userid'}) 
// friendreq.removeAttribute('id')

module.exports = friendreq; 
 