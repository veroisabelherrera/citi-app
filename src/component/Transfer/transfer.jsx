import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import './Transfer.css';

function Transfer() {
  return (
    <section className="container-btn-home">

      <Link to="/Profile"><button type="button" className="btn-home">Compartir Formulario</button></Link>
      <Link to="/contacts"><button type="button" className="btn-home">Mis contactos</button></Link>

    </section>
  );
}

export default Transfer;
