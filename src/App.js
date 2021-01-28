import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import { AuthContext } from "./context/auth";
import { LoginContext } from "./context/login"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [authTokens, setAuthTokens] = useState({tokens: []});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setTokens = data => {
    setAuthTokens({tokens: [...authTokens.tokens, data]})    
  }


  return (
    <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}} >
      <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
        <Router>
          <div>
            <Link to='/home' >Home</Link>
            <Link to='/main' >Main</Link>
            <Route exact path='/' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/home' component={Home} />
            <PrivateRoute path='/main' component={Main} />
          </div>
        </Router>
      </AuthContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
