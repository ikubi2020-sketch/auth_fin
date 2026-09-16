import {comparePassword, createHash, createToken, verifyToken} from "../middleware/authMiddleware.js"
import {getByEmail, createUser} from "../dal/dalUsers.js"
import { createError } from "../middleware/middleware.js"

export async function registerServ(user) {
    try {
        const isExists = await getByEmail(user.email)
        if(isExists){throw createError(409 , "user already exists in this email")}
        const hash = createHash(user.password)
        user.hash = hash
        delete user.password
        await createUser(user)
        return "user created successfully"
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function loginServ(userLogin) {
    try {
        
    } catch (error) {
        throw error
    }
}