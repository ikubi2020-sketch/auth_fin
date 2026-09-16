import axios from "axios";
import { useRef, useState } from "react"
import { Navigate } from "react-router";

type response = {
    token : string
}

type responseError = {
    message : string
}


export default function Login() {
    const [token , setToken] = useState<response | responseError | null>(null)
    const [message , setMessage] = useState<responseError | null>(null)
    const email  =  useRef("") 
    const password  = useRef("")
    async function handleSubmission() {
        const user = {
            "email" : email.current,
            "password" : password.current
        }
        const response  = await axios.post("http://localhost:3010/auth/register", user)
        
        setToken(response.data)
        if(response.data.token)
         return <Navigate  to="/users"/>
        else {setMessage(response.data.message)}
    }
  return (
    <div>
        <h1>register in to the system</h1>
        <div>
            <input onChange={(e) => email.current = e.target.value} type="email" placeholder="enter your email" required/>
            <input  onChange={(e) => password.current = e.target.value} type="text" placeholder="enter your password" required/>
            <button onClick={handleSubmission}>send</button>
        </div>
        <div>{message?.message}</div>
    </div>
  )
}
