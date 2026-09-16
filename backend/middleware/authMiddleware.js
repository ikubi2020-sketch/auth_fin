import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



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
    const valid = jwt.verify(token, process.env.KEY_JWT)
    return valid
}
