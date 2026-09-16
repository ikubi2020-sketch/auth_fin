import zod from "zod"


export function createError(statusCode, message) {
    const error = new Error(message)
    error.statusCode = statusCode
    return error
}

export function errorHandler(err, req, res, next) {
    console.log(err)
    if(err.statusCode){
        res.status(err.statusCode).json({result : err.message})
    }
    else{
        res.status(500).json({result : "something went wrong"})
    }
}

export async function logger(req, res, next) {
    console.log(req.method, req.url)
    next()
}

export const validUser = zod.object({
    "username" : zod.string({message : "username must be a string"}).trim().min(2, "username must be 2 characters").max(50, "username must be less then 50 characters"),
    "email" : zod.email({message : "email must be a string of a valid email"}).max(50, "email must be less then 50 characters"),
    "password" : zod.string({message  :  "password must be a string"}).min(8, "password must be 8 characters").max(50, "password must be less then 50 characters"),
})


export const validLogin = zod.object({
    "email" : zod.email({message : "email must be a string of a valid email"}).max(50, "email must be less then 50 characters"),
    "password" : zod.string({message  :  "password must be a string"}).min(8, "password must be 8 characters").max(50, "password must be less then 50 characters"),
})



export function validation(schema) {
    return (req, res, next)=>{
        const result = schema.safeParse(req.body)
        if(!result.success){
            return res.status(400).json(zod.flattenError(result.error).fieldErrors)}
        req.body = result.data
        next()
        }}

export function cleanUsers(users) {
    const noHashUsers = users.map((user)=>{
        delete user.hash
        return user
    })
    const cleanUsers = noHashUsers.map((user)=>{
        user.id = user._id
        delete user._id
        return user
    })
    return cleanUsers
}



