import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { action_remove_logged_user } from '../reduxContainer/actions';

function Welcome(props) {

  //using redux - start

  const logged_in_user = useSelector((state) => state.logged_user);
  const dispatch = useDispatch();
  console.log(logged_in_user);

  //using redux - end

  function logout() {
    dispatch(action_remove_logged_user());
    props.displayPage("login");
  }
  return (
    <div className='welcome-container'>
      <p className='main-text'>Welcome, {logged_in_user.username}!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam!</p>
      <br />
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default Welcome