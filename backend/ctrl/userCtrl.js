import express from "express";
import {getUserServ} from "../service/userService.js"
import { validation ,validUser,validLogin} from "../middleware/middleware.js";
import { middlewareGetUsers } from "../middleware/authMiddleware.js"


const router = express.Router()


router.get("/",middlewareGetUsers, async (req , res, next)=>{
    try {
        const users = await getUserServ()
        res.status(200).json({message : "got all users", users : users})
    } catch (error) {
        console.log(error)
        next(error)
    }
})

export default router