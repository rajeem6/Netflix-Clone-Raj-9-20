import React, { useEffect, useState } from "react";
import logo from "../assets/logo (1).png";
import { auth } from "../firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [signState, setSignState] = useState("Sign In");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    if (signState === "Sign In") {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log("signed in");
          const loggedInUser = user.user;
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
        });
    } else if (signState === "Sign Up") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log("new user registered");
          const newUser = user.user;
          console.log(newUser);
          navigate("/")
          return newUser;
        })
        .then((newUser) => {
          return updateProfile(newUser, {
            displayName: name,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="register">
      <img src={logo} alt="" className="register-logo" />
      <div className="register-form">
        <h1>{signState}</h1>
        <form onSubmit={onSubmit}>
          {signState === "Sign Up" ? (
            <input
              value={name}
              type="text"
              placeholder="Your Name"
              onChange={(event) => setName(event.target.value)}
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {signState === "Sign In" ? (
            <button type="submit">Sign In</button>
          ) : (
            <button type="submit">Sign Up Now</button>
          )}
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign Up" ? (
            <p>
              Already have an Account?{" "}
              <span onClick={() => setSignState("Sign In")}>Login Here</span>
            </p>
          ) : (
            <></>
          )}
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
