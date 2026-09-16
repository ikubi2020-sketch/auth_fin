


import { useState,  FormEvent} from "react";
import axios from "axios";

export default function UserForm() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e : FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user = {
      username,
      email
    };

    const response = await axios.post(
      "http://localhost:3000/users",
      user
    );

    console.log(response.data);
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button>Send</button>

    </form>
  );
}