import React from 'react';
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import Profile from '../profile/profile';
import Transfer from '../Transfer/transfer';
import './Home.css';
import 'firebase/auth';
import '../Routing';

import { H4 } from '../elements/H4';
import { H2 } from '../elements/H2';


export default () => {


  return (
    <section className="container-btn-home">

      
        <div>
          <H4>Tu saldo actual es</H4>
          <H2>$ 125.000</H2>
        </div>
        
        <Link to="/Profile"><button type="button" className="btn-home">Mi Perfil</button></Link>
        <Link to="/Transfer"><button type="button" className="btn-home">Transferir</button></Link>
      


    </section>
  );
};
