import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginSignup.css";

const Login = () => {
  const navigate = useNavigate();
  const [, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Sign In </h2>
        <h2
          className="inactive underlineHover"
          onClick={() => navigate("/register")}
        >
          Sign Up{" "}
        </h2>

        <div className="fadeIn first">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            id="icon"
            alt="User Icon"
          />
        </div>

        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
            onChange={onChange}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            onChange={onChange}
          />
          <input
            type="submit"
            className="fadeIn fourth"
            value="Log In"
            onClick={onSubmit}
          />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="/login" onClick={() => {}}>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
