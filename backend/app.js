import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import { errorHandler } from "./middleware/middleware.js"
dotenv.config()

const app = express()
const port = Number(process.env.PORT) || 3010

app.use(cors({}))

app.use("/users" , ()=>{})


app.use(errorHandler)

app.listen(port , ()=>{
    console.log(`server run on port ${port}`)
})













