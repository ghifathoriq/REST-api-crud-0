import express from "express";
import { Router } from "express"; //akan di gunakan oleh express.Router 
import { getUsers, getUsersById, createUser, updateUser, deleteUser } from "../controllers/UserController.js";

const router = express.Router();

// mendeklarasikan metod yang telah dibuat
// ini akan mengambil nama, data dari db dari tabel users
router.get('/users', getUsers);
// ini akan mengambil id, data dari db dari tabel users
router.get('/users/:id', getUsersById);
// ini akan mengarahkan kepage create user
router.post('/users', createUser);
// ini akan mengarahkan ke page update/edit user
router.patch('/users/:id', updateUser);
// ini akan mengarahkan ke page delete user
router.delete('/users/:id', deleteUser);

export default router