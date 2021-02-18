import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({component: Component, ...props}) {
  return (
    <Route>
      {()=>
        props.loggedIn ? <Component {...props}/> : <Redirect to = "./sign-in"></Redirect>
        // props.loggedIn === false && <Component {...props}/>
        // loggedIn  ? <Component {...props}/> : <Redirect to = "/sign-in"></Redirect>
      }
    </Route>
  )
};

export default ProtectedRoute;
