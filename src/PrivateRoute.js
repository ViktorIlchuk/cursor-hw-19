import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

function PrivateRoute({ component: Component, isLoggedIn, ...rest}) {
    return (
        <Route {...rest} render={(props) => isLoggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/' />
        )}
        />
    )
}

export default PrivateRoute;
