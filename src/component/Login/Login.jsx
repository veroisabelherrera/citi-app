import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import './Login.css';
import { H2 } from '../elements/H2';
import { H4 } from '../elements/H4';
import { Paragraph } from '../elements/Paragraph';


export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebaseApp();
  const user = useUser();

  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <div className="container-login col-12">
      {user && <button type="button" className="btn-logout" onClick={logout}>Cerrar sesión</button>}
      {
        !user
        && (
        <section>
          <H2>Inicio de sesión</H2>
          <div>
            <H4>Correo</H4>
            <input type="email" id="email" placeholder="Escribe tu correo" className="input-login" onChange={(event) => setEmail(event.target.value)} />
            <H4>Contraseña</H4>
            <input type="password" id="password" placeholder="Escribe contraseña" className="input-login" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="link">
            <Paragraph className="h6"><a className="link-login">¿Olvidaste tu contraseña?</a></Paragraph>
          </div>
          <button type="button" onClick={login} className="Btn">Iniciar sesión</button>
        </section>
        )
      }
    </div>
  );
};
