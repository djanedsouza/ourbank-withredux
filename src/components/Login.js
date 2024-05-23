import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action_add_logged_user } from "../reduxContainer/actions";

function Login(props) {
  //using redux - start

  const registered_users = useSelector((state) => state.registered_users);
  const dispatch = useDispatch();
  console.log(registered_users);


  function submit(e) {
    if (user.username && user.password) {
      e.preventDefault();
      let userFound = false;
      for (let r_user of registered_users) {
        if (
          user.username === r_user.username &&
          user.password === r_user.password
        ) {
          userFound = true;
          break;
        }
      }

      if (userFound) {
        dispatch(action_add_logged_user(user));
        props.displayPage("welcome");
      } else {
        alert("Invalid Username/Password!");
      }
    }
  }

  function displayRegisterPage() {
    props.displayPage("register");
  }

  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <div className="login-container">
      <p className="main-text">Let's get started</p>
      <p>Login to use our services</p>
      <form>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required
          placeholder="Type your username"
          className="input-field input-field-normal"
        ></input>
        <br />
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
          placeholder="Type your password"
          className="input-field input-field-normal"
        ></input>
        <br />
        <br />
        <input type="submit" value="LOGIN" onClick={submit}></input>
        <p>
          Don't have an account?{" "}
          <span className="purple-text pointer" onClick={displayRegisterPage}>
            Register here
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
