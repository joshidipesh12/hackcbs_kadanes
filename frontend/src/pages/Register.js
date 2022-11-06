import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      // toast.error('Passwords do not match')
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2
          className="inactive underlineHover"
          onClick={() => {
            navigate("/login");
          }}
        >
          {" "}
          Sign In{" "}
        </h2>
        <h2 className="active">Sign Up </h2>

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
            id="name"
            className="fadeIn second"
            name="name"
            placeholder="name"
            onChange={onChange}
          />
          <input
            type="text"
            id="username"
            className="fadeIn second"
            name="username"
            placeholder="username"
            onChange={onChange}
          />
          <input
            type="text"
            id="email"
            className="fadeIn second"
            name="email"
            placeholder="email"
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
            type="text"
            id="password2"
            className="fadeIn third"
            name="password2"
            placeholder="confirm password"
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
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
