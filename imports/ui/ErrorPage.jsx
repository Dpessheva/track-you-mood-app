import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="top-nav">
        <NavLink className="nav" to="/">Home</NavLink>
         <p className="error"> Sorry, the page was not found!</p>
      </div>
        </div>
    )
}


export default ErrorPage;