import { MongoClient } from  "mongodb"

const client = new MongoClient(process.env.MONGO_URL || "mongodb://localhost:27017")

export const db = client.db("auth_fin")

try {
    await client.connect()
    console.log("mongo db connected")
} catch (error) {
    console.log(error)
    process.exit(1)
}


