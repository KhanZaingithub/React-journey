import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const submitHandle = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <h2>Login Details</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <button onClick={submitHandle} type="submit">
        Submit
      </button>
    </>
  );
}

export default Login;
