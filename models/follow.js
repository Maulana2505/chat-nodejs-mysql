
const {Sequelize , DataTypes} = require('sequelize')
const {db} = require('../database/db.js');
const user = require('./user.js');

// const follow = db.define('follow',{
//     id:{
//         type:DataTypes.UUID,
//         field : 'id',
//         primaryKey: true,
//         defaultValue:DataTypes.UUIDV4,
        
//     },
//     followId:{field:'followId', type:DataTypes.STRING,default: null,allowNull : true,},
//     username:{field:'username', type:DataTypes.STRING,default: null,allowNull : true,},
//     imgprofile:{field:'imgprofile', type:DataTypes.STRING,default: null,allowNull : true,}
// });

 
// module.exports = follow