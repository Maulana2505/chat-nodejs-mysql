const {Sequelize , DataTypes} = require('sequelize')
const {db} = require('../database/db.js')
const user = require('./user.js')

// const post = db.define('post',{
//     id:{
//         type:DataTypes.UUID,
//         field : 'id',
//         primaryKey: true,
//         defaultValue:DataTypes.UUIDV4
//     },
//     imgpost: {type:DataTypes.STRING,field : 'imgpost',},
//     description:{type:DataTypes.STRING,field : 'description',}

// },{Sequelize,timestamps:true})
// post.belongsToMany(user,{through:'user'})
// user.hasMany(post, { as: 'post', foreignKey: 'userId'});
// post.belongsTo(user, { as: 'user', foreignKey: 'userId'});

// module.exports = post  