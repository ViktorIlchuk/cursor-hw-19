import React from "react";
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { changeIsLogged } from "../redux/actions";

function Main({isLoggedIn, changeIsLogged}) {
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  
  return (
    <div>
      <h1>Main Page</h1>
        <button onClick={() => changeIsLogged(!isLoggedIn)}>Logout</button>
    </div>
  );
}

const mapStateToProps = state => ({isLoggedIn: state.auth.isLoggedIn})

export default connect(mapStateToProps, {changeIsLogged})(Main);