import React from 'react';
import './Home.css';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import './Home.css';


export default () => {
  const firebase = useFirebaseApp();

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <div className="containe-btn-home">

      <button type="button" className="btn-home">Mi Perfil</button>
      <button type="button" className="btn-home">Transferir</button>
      <button type="button" className="Btn-two" onClick={logout}>Cerrar sesión</button>

    </div>
  );
};
