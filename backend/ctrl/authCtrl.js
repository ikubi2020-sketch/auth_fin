import express from "express";
import {registerServ, loginServ} from "../service/authService.js"
import { validation ,validUser,validLogin} from "../middleware/middleware.js";


const router = express.Router()

router.post("/register",validation(validUser),async (req , res, next)=>{
    const userRegister = req.body
    try {
        const resultMessage = await registerServ(userRegister)
        res.status(201).json({message : resultMessage})
    } catch (error) {
        console.log(error)
        next(error)
    }
})


router.post("/login",validation(validLogin),async (req , res, next)=>{
    const userLogin = req.body
    try {
        const token = await loginServ(userLogin)
        res.status(201).json({token : token})
    } catch (error) {
        next(error)
    }
})

export {router}