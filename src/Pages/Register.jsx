import React, { useState } from "react";
import logo from "../assets/logo (1).png";

const Register = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="register">
      <img src={logo} alt="" className="register-logo" />
      <div className="register-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {signState === "Sign In" ? (
            <button>Sign In</button>
          ) : (
            <button>Sign Up Now</button>
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
