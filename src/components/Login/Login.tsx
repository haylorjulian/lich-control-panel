import axios from "axios";
import React, { useState } from "react";
import { routes } from "../../api/consts";

async function loginUser(credentials: any) {
  const data = await axios.post(routes.USERS, credentials, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
}

export default function Login({ setToken }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = await loginUser({
      email,
      password,
    });

    const token = user.data.token;

    setToken(token);
  };

  return (
    <div>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
