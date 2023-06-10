import User from "../models/UserModel.js";

// method untuk getuser, ini yang pasti akan tampil pada sisi front end tanpa action apapaun(method fetching)
export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

// method untuk menserch userById
export const getUsersById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
}

// untuk membuar user baru 
export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "user Created"})
    } catch (error) {
        console.log(error.message)
    }
}

// method untuk update data pada db 
export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "user Updated"})
    } catch (error) {
        console.log(error.message)
    }
}

// method delet user pada db
export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "user Deleted!"})
    } catch (error) {
        console.log(error.message)
    }
}