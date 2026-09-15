import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export function createHash(password) {
    const hash = bcrypt.hashSync(password, 10)
    return hash
}

export function createHash(password, passwordHash) {
    const valid = bcrypt.compareSync(password, passwordHash)
    return valid
}

export function createToken(userId) {
    const token = jwt.sign({userId}, process.env.KEY_JWT, {expiresIn : process.env.JWT_EXPIRE})
    return token
}

export function createToken(token) {
    const valid = jwt.verify(token, process.env.KEY_JWT)
    return valid
}






