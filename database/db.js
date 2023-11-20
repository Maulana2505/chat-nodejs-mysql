const { Sequelize } = require("sequelize");

const db = new Sequelize('nodejs_mysql','root','',{
    host : 'localhost',
    dialect : 'mysql',
})  
// const db = new Sequelize('railway','root','hbjopK9XCsgzbK9KlRIl',{
//     host : 'containers-us-west-93.railway.app',
//     port : 7037,
//     dialect : 'mysql', 
// }) 
const connetdb = async function(){
    try {
        await db.authenticate()
        console.log('Connected to Database ')
    } catch (error) {
        console.error('Unable connect to Database :',error)
    }
}
// db.sync({force:true}) 

module.exports = {db,connetdb}  