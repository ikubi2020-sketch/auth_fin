import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createError } from "./middleware.js"



export function createHash(password) {
    const hash = bcrypt.hashSync(password, 10)
    return hash
}

export function comparePassword(password, passwordHash) {
    const valid = bcrypt.compareSync(password, passwordHash)
    return valid
}

export function createToken(userKey) {
    const token = jwt.sign({userKey}, process.env.KEY_JWT, {expiresIn : process.env.JWT_EXPIRE})
    return token
}

export function verifyToken(token) {
    const payLoud = jwt.verify(token, process.env.KEY_JWT)
    return payLoud
}

export function middlewareGetUsers(req , res , next) {
    const {authorization} = req.headers
    if(!authorization){throw  createError(401, "missing headers 1")}
    const token = authorization.split("Bearer ")[1]
    if(!token){throw  createError(401, "missing headers")}
    const payLoud = verifyToken(token)
    req.user = payLoud
    next()
}
