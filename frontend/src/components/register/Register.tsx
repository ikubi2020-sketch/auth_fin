import axios from "axios";
import { useRef, useState } from "react"

type response = {
    message : string
}

export default function Register() {
    const [message , setMessage] = useState<response | null>(null)
    const username = useRef("") 
    const email  =  useRef("") 
    const password  = useRef("")
    async function handleSubmission() {
        const user = {
            "username" : username.current,
            "email" : email.current,
            "password" : password.current
        }
        const response  = await axios.post("http://localhost:3010/auth/register", user)
        
        setMessage(response.data)
       
    }
  return (
    <div>
        <h1>register in to the system</h1>
        <div>
            <input  onChange={(e) => username.current = e.target.value} type="text" placeholder="enter your username" required/>
            <input onChange={(e) => email.current = e.target.value} type="email" placeholder="enter your email" required/>
            <input  onChange={(e) => password.current = e.target.value} type="text" placeholder="enter your password" required/>
            <button onClick={handleSubmission}>send</button>
        </div>
        <div>{message?.message}</div>
    </div>
  )
}