import express from "express";
import {registerServ, loginServ} from "../service/authService.js"
import { validation ,validUser,validLogin} from "../middleware/middleware.js";


const router = express.Router()




export {router}