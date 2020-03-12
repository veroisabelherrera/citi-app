import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Button } from '../elements/Button';
import Login from './Login';
import Register from './Register';



function LoginScreen() {
  return (
    <section className="nav-login">
     
          <Link to="/register"><Button>Registrarme</Button></Link>
          <Link to="/login"><Button>Iniciar sesión</Button></Link>

    </section>
  );
}

export default LoginScreen;
