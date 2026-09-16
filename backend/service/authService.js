import {comparePassword, createHash, createToken, verifyToken} from "../middleware/authMiddleware.js"
import {getByEmail, createUser} from "../dal/dalUsers.js"
import { createError } from "../middleware/middleware.js"

// fake user
// {
//     "username": "meir",
//     "email": "ossve@gmail.com",
//     "password": "12dsf3sf678"
// }


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
        const isExists = await getByEmail(userLogin.email)
        if(!isExists){throw createError(409 , "user not exists in this email")}
        
        const validPassword = comparePassword(userLogin.password, isExists.hash)
        if(!validPassword){throw createError(404, "email or password not valid")}

        const token = createToken(userLogin.email)
        return token
    } catch (error) {
        throw error
    }
}