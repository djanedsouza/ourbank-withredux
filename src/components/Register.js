import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {action_add_registered_user} from "../reduxContainer/actions";

function Register(props) {
  //using redux - start

  const registered_users = useSelector((state) => state.registered_users);
  const dispatch = useDispatch();
  console.log(registered_users);

  function submit(e) {
    if (
      user.username &&
      user.password &&
      user.confirmPassword &&
      user.mobile &&
      user.customerId
    ) {
      e.preventDefault();
      let userFound = false;
      for (let r_user of registered_users) {
        if (user.customerId === r_user.customerId) {
          userFound = true;
          break;
        }
      }
      if (userFound) {
        alert("User already exists!");
      } else if (user.password !== user.confirmPassword) {
        alert("Passwords do not match!");
      } else {
        dispatch(action_add_registered_user(user));
        setUser({
          username: "",
          password: "",
          confirmPassword: "",
          mobile: "",
          customerId: "",
        });
        alert("Registered successfully!");
      }
    }
  }

  //using redux -end
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    customerId: "",
  });

  function displayLoginPage() {
    props.displayPage("login");
  }

  return (
    <div className="login-container">
      <p className="main-text">Let's get started</p>
      <p>Register to use our services</p>
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
        <input
          type="password"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          required
          placeholder="Confirm password"
          className="input-field input-field-normal"
        ></input>
        <br />
        <input
          type="text"
          value={user.mobile}
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
          required
          placeholder="Type your mobile number"
          className="input-field input-field-normal"
        ></input>
        <br />
        <input
          type="text"
          value={user.customerId}
          onChange={(e) => setUser({ ...user, customerId: e.target.value })}
          required
          placeholder="Type your customer ID"
          className="input-field input-field-normal"
        ></input>
        <br />
        <br />
        <input type="submit" value="REGISTER" onClick={submit}></input>
        <p>
          Already have an account?{" "}
          <span className="purple-text pointer" onClick={displayLoginPage}>
            Login here
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
