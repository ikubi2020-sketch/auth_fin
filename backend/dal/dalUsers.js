import { db} from "./dbConnection.js";

const authCollection = db.collection("auth_collection")

export async function getByEmail(email) {
    try {
        const user = await authCollection.findOne({email : email})
        return user
    } catch (error) {
        throw error
    }
}


export async function createUser(user) {
    const myUser = user
    try {
        const user = await authCollection.insertOne(myUser)
        return user
    } catch (error) {
        throw error
    }
}