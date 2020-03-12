import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import './Login.css';
import { Link } from 'react-router-dom';
import { H2 } from '../elements/H2';
import { H4 } from '../elements/H4';
import { Paragraph } from '../elements/Paragraph';
import Home from '../home/Home';


export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebaseApp();
  const user = useUser();

  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };


  return (
    <div className="login-container">
      {user && (
        <Home />
      )}
      {
        !user
        && (
          <section className="form-login-container">
            <H2>Inicio de sesión</H2>
            <div>
              <H4>Correo</H4>
              <input type="email" id="email" placeholder="Escribe tu correo" className="input-login" onChange={(event) => setEmail(event.target.value)} />
              <H4>Contraseña</H4>
              <input type="password" id="password" placeholder="Escribe contraseña" className="input-login" onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="link">
              <Paragraph className="h6"><div className="link-login">¿Olvidaste tu contraseña?</div></Paragraph>
            </div>
            <Link><button type="button" onClick={login} className="Btn">Iniciar sesión</button></Link>
          </section>
        )
      }
    </div>
  );
};
