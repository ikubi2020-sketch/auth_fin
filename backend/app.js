import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import { errorHandler } from "./middleware/middleware.js"
import routerAuth from "./ctrl/authCtrl.js" 
import { logger } from "./middleware/middleware.js"
import  routerUser  from "./ctrl/userCtrl.js"

const port = Number(process.env.PORT) || 3005

const app = express()

app.use(express.json())

app.use(logger)

app.use(cors())

app.use("/auth" , routerAuth)

app.use("/users", routerUser)

app.use(errorHandler)

app.listen(port , ()=>{
    console.log(`server run on port ${port}`)
})













