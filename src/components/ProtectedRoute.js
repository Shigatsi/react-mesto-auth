import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({component: Component, ...props}) {
  return (
    <Route>
      {
        // props.loggedIn === true ? <Component {...props}/> : <Redirect to = "/sign-in"></Redirect>
        props.loggedIn === false && <Component {...props}/>
      }
    </Route>
  )
};

export default ProtectedRoute;
