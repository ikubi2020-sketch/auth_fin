import {comparePassword, createHash, createToken, verifyToken} from "../middleware/authMiddleware.js"
import {getByEmail, createUser} from "../dal/dalUsers.js"
import { createError } from "../middleware/middleware.js"
import { getUsers } from "../dal/dalUsers.js"
import {cleanUsers} from "../middleware/middleware.js"

export async function getUserServ() {
    try {
        const users = await getUsers()
        const cleanUser = cleanUsers(users)
        return cleanUser
    } catch (error) {
        throw error
    }
}