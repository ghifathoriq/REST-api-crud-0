// install dan import dependency yang diperlukan
import express from "express" // sebagai app nya
import cors from "cors" // agar api kita bisa diakses dari luar domain 

// import UserRoute dari folder routes untuk keperluan routing 
import UserRoute from "./routes/UserRoute.js"

// deklarasikan port yang akan diakses di localhost pada web
const port = '5000'

// gunakan express() untuk membuat app nya jalan
const app = express();

// membuat middleware
app.use(cors()); // cross origin resource agar api kita bisa di akses dariluar domain
app.use(express.json()); // menggunakan express.json() agar kita bisa menerima req dengan format .json
app.use(UserRoute);

// buat server ini berjalan dengan app.listen(port)
app.listen(port, ()=>console.log(`server is running at localhost:${port}`))