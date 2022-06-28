import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useState } from "react";
// import axios from 'axios'
import "./login.css";
import axios from "../api/Axios";
import { Navigate, useNavigate } from "react-router-dom";
import { get_student,get_teacher } from "../redux/action";

const LOGIN_URL = "/users/login";



const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, {
        username: user,
        password: password,
      });

      console.log(response);
      window.localStorage.setItem("Token", response.data.data.token);
    //   console.log(JSON.parse(response.data));
      if (response.data.data.role == "teacher") {
        dispatch(get_teacher(response.data.data))
        navigate("/teacher");
      } 
      else if (response.data.data.role == "student") {
        dispatch(get_student(response.data.data))
        navigate("/student");
      } 
      else if (response.data.data.role == "admin") {
        console.log("admin");
      }
      

      const accessToken = response?.data?.data.token;
      setUser("");
      setPassword("");
    } catch (err) {
      return err;
    }
  };



  return (
    <section className="mainLogin">
      <div className="loginContainer">
        <div className="loginContent">
          <div className="loginTitle">
            <img src="./images/login-avatar.PNG" alt="avatar" />
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit} className="LoginForm">
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              placeholder="Enter your Username"
              className="textInp"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              autoComplete='off'
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="textInp"
              value={password}
            />

            <input type="submit" value="Login" className="btnInp" />
            <p>Don't have an Account</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
