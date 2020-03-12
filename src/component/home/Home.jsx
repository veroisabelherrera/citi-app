import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import 'firebase/auth';
import { H4 } from '../elements/H4';
import { H2 } from '../elements/H2';


export default () => (
  <section className="container-btn-home">
    <div>
      <H4>Tu saldo actual es</H4>
      <H2>$ 125.000</H2>
    </div>

    <Link to="/Profile"><button type="button" className="btn-home">Mi Perfil</button></Link>
    <Link to="/Transfer"><button type="button" className="btn-home">Transferir</button></Link>
  </section>
);
