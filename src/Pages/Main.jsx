import React from "react";
import { Redirect } from 'react-router-dom';
import { useLogin } from "../context/login";

function Main(props) {
  const { setIsLoggedIn } = useLogin();
  const { isLoggedIn } = useLogin()

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  
  return (
    <div>
      <h1>Main Page</h1>
        <button onClick={() => setIsLoggedIn(false)} >Logout</button>
    </div>
  );
}

export default Main;