// membuat koneksi dengan database phpmyadmin / mysql
import { Sequelize } from "sequelize" // menggunakan Sequelize untuk membuat koneksi dengan db


// membuat method 
const db = new Sequelize('crud1_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;