import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { Link } from 'react-router-dom';
import { H2 } from '../elements/H2';
import { H4 } from '../elements/H4';
import Home from '../home/Home';


export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebaseApp();
  const user = useUser();

  const register = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      {user && (
        <Home />
      )}
      {
        !user
        && (
          <section className="form-login-container">
            <H2>Creación de cuenta</H2>
            <div>
              <H4>Correo</H4>
              <input type="email" id="email" placeholder="Escribe tu correo" className="input-login" onChange={(event) => setEmail(event.target.value)} />
              <H4>Contraseña</H4>
              <input type="password" id="password" placeholder="Escribe contraseña" className="input-login" onChange={(event) => setPassword(event.target.value)} />
            </div>
            <Link><button type="button" onClick={register} className="Btn">Crear cuenta</button></Link>
          </section>
        )
    }
    </div>
  );
};
