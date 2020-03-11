import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import Profile from '../Profile/profile'
import Transfer from '../Transfer/transfer'
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
      <BrowserRouter>
        <>
          <Link to="/Profile"><button type="button" className="btn-home">Mi Perfil</button></Link>
          <Link to="/Transfer"><button type="button" className="btn-home">Transferir</button></Link>
          <button type="button" className="Btn-two" onClick={logout}>Cerrar sesión</button>

          <Route path="/Profile" component={Profile} />
          <Route path="/Transfer" component={Transfer} />
        </>
      </BrowserRouter>
    </div>
  );
};
