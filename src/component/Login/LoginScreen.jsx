import React from 'react';
import Login from './Login';
import Register from './Register';


export const NextBtn = () => (
  <div>
    <Link to="/Register">
      <img src={Register} className="nav-btn" />
    </Link>

    <Link to="/Login">
      <img src={Login} className="nav-btn" />
    </Link>
  </div>
);
