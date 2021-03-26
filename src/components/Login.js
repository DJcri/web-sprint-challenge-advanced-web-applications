import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
  username: "",
  password: "",
  error: "",
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formValues)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    const token = localStorage.getItem("token");
    token ? props.history.push("/protected") : props.history.push("/");
  }, []);

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input
            data-testid="username"
            onChange={handleChanges}
            name="username"
            type="text"
            placeholder="Enter username.."
            value={setFormValues.username}
          />
          <br />
          <label>Password: </label>
          <input
            data-testid="password"
            onChange={handleChanges}
            name="password"
            type="password"
            placeholder="Enter password.."
            value={setFormValues.password}
          />
          <br />
          <input type="submit" />
        </form>
      </div>

      <p data-testid="errorMessage" className="error">
        {formValues.error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
