import express from "express";

const router = express.Router()

router.use("/auth/register", (req , res, next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
})

export {router}