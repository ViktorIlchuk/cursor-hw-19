import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import {connect} from 'react-redux';
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App({isLoggedIn}) {
  return (  
    <Router>
      <div>
        <Link to='/home' >Home</Link>
        <Link to='/main' >Main</Link>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
        <PrivateRoute path='/main' component={Main} isLoggedIn />
      </div>
    </Router>   
  );
}

const mapStateToProps = state => ({isLoggedIn: state.auth.isLoggedIn})

export default connect(mapStateToProps)(App)

