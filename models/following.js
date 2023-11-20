const { type } = require('express/lib/response')
const {Sequelize , DataTypes} = require('sequelize')
const {db} = require('../database/db.js');
const user = require('./user.js');

// const following = db.define('following',{
//     id:{
//         type:DataTypes.UUID,
//         field : 'id',
//         primaryKey: true,
//     },
//     followingId:{field:'followingId', type:DataTypes.STRING,default: null,allowNull : true,},
//     username:{field:'username', type:DataTypes.STRING,default: null,allowNull : true,},
//     imgprofile:{field:'imgprofile', type:DataTypes.STRING,default: null,allowNull : true,}
// });
// db.sync({force:true}) 
// user.hasMany(following,{as:'following',foreignKey:'userId'})
// following.belongsTo(user,{as:'user',foreignKey:'userId'})

// module.exports = following;