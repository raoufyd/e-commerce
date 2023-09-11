import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src="https://logos-marques.com/wp-content/uploads/2021/03/Amazon-logo.png"
          alt=""
        />
      </Link>
      <div className="login__signin">
        <h2>Sign in</h2>
        {/* email */}
        <label className="text__email" for="email">
          E-mail
        </label>
        <input
          className="input__email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>
        {/* Passwordd */}
        <label className="text__email" for="email">
          Password
        </label>
        <input
          className="input__email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
        {/* button */}
        <button onClick={login} type="submit" className="buttonone">
          Sign in
        </button>
        <p>
          Welcome to Amazon Benefits, your online resource for health and
          welfare programs at Amazon and its subsidiaries.
        </p>
        <button onClick={register} className="buttontwo">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
