import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import zod from "zod"



export function createHash(password) {
    const hash = bcrypt.hashSync(password, 10)
    return hash
}

export function comparePassword(password, passwordHash) {
    const valid = bcrypt.compareSync(password, passwordHash)
    return valid
}

export function createToken(userId) {
    const token = jwt.sign({userId}, process.env.KEY_JWT, {expiresIn : process.env.JWT_EXPIRE})
    return token
}

export function verifyToken(token) {
    const valid = jwt.verify(token, process.env.KEY_JWT)
    return valid
}



export async function logger(req, res, next) {
    console.log(req.method, req.url)
    next()
}




