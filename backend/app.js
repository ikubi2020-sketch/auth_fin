import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import { errorHandler } from "./middleware/middleware.js"
dotenv.config()
import {router} from "./ctrl/authCtrl.js"
import { logger } from "./middleware/middleware.js"

const port = Number(process.env.PORT) || 3010

const app = express()

app.use(logger)

app.use(cors())

app.use("/users" , router)

app.use(errorHandler)

app.listen(port , ()=>{
    console.log(`server run on port ${port}`)
})













