import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { useFirebaseApp } from 'reactfire';
import Profile from '../profile/profile';
import Transfer from '../Transfer/transfer';
import './Home.css';
import 'firebase/auth';

import { H4 } from '../elements/H4';
import { H2 } from '../elements/H2';


export default () => {
  const firebase = useFirebaseApp();

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <div className="containe-btn-home">
      <BrowserRouter>

        <div>
          <H4>Tu saldo actual es</H4>
          <H2>$ 125.000</H2>
        </div>

        <Link to="/Profile"><button type="button" className="btn-home">Mi Perfil</button></Link>
        <Link to="/Transfer"><button type="button" className="btn-home">Transferir</button></Link>
        <button type="button" className="Btn-two" onClick={logout}>Cerrar sesión</button>
        <Switch>
          <Route path="/Profile" component={Profile} />
          <Route path="/Transfer" component={Transfer} />
        </Switch>

      </BrowserRouter>

    </div>
  );
};
