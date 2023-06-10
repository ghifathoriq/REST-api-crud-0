import { Sequelize } from "sequelize"; 
import db from "../config/Database.js"; 

// method untuk mengambil data dari db, jika tidak ada dalam db maka akan menjalankan fungsi
// yang berada di baawah async await db.sync (membuat baru dengan format const User = db.define bla bla)
const {DataTypes} = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true
});

export default User;

(async()=>{
    await db.sync(); 
})()