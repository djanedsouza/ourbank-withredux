import React, { useEffect, useRef, useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import Welcome from "../components/Welcome";
import Error from "../components/Message";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";

function NetBanking() {

  //using redux - start

  const registered_users = useSelector((state) => state.registered_users);
  const dispatch = useDispatch();

  //using redux - end
  const [display, setDisplay] = useState("login");
  const [message, setMessage] = useState({});
  const [loggedUser, setLoggedUser] = useState({});

  function setDisplayFlag(data) {
    setMessage({});
    setDisplay(data);
  }

  const [users, setUsers] = useState([
    {
      username: "admin",
      password: "admin",
      confirmPassword: "admin",
      mobile: "9876543211",
      customerId: "c001",
    },
  ]);

  // function validateUser(data) {
  //   console.log(data);
  //   let userFound = false;
  //   for (let user of users) {
  //     if (user.username === data.username && user.password === data.password) {
  //       userFound = true;
  //       break;
  //     }
  //   }

  //   if (userFound) {
  //     setMessage({});
  //     setLoggedUser(data);
  //     setDisplay("welcome");
  //   } else {
  //     setMessage({ message: "Invalid Username/Password!", type: "error" });
  //   }
  // }

  // function registerUser(data) {
  //   console.log(users);
  //   let userFound = false;
  //   for (let user of users) {
  //     if (user.customerId === data.customerId) {
  //       userFound = true;
  //       break;
  //     }
  //   }
  //   if (userFound) {
  //     setMessage({ message: "User already exists!", type: "error" });
  //   } else if (data.password !== data.confirmPassword) {
  //     setMessage({ message: "Passwords do not match!", type: "error" });
  //   } else {
  //     setUsers([...users, data]);
  //     dispatch(action_add_registered_user(data));
  //     setMessage({ message: "Registered successfully!", type: "success" });
  //   }
  // }

  return (
    <div>
      {display === "login" ? (
        <Login displayPage={setDisplayFlag} />
      ) : display === "register" ? (
        <Register displayPage={setDisplayFlag} />
      ) : (
        <Welcome displayPage={setDisplayFlag} />
      )}
      <Message message={message.message} type={message.type} />
    </div>
  );
}

export default NetBanking;
