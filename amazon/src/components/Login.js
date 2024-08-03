import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/login-logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useAuth } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="login-img" />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" type="submit" onClick={signIn}>
            sign In
          </button>
          <p>
            By continue. you agree to Amazon's Fake Clone Conditions of Use and
            Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}
