import {comparePassword, createHash, createToken, verifyToken} from "../middleware/authMiddleware.js"
import {getByEmail, createUser} from "../dal/dalUsers.js"
import { createError } from "../middleware/middleware.js"
import { getUsers } from "../dal/dalUsers.js"

export async function getUserServ() {
    try {
        const users = await getUsers()
        return users
    } catch (error) {
        throw error
    }
}