import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import './Transfer.css';

function Transfer() {
  return (
    <section className="container-btn-home">
      
      <a href="https://api.whatsapp.com/send?&text=https:https://datos-bancarios-e6ed7.web.app/" data-action="share/whatsapp/share" target="_blank"><button type="button" className="btn-home">Compartir Formulario</button></a>
      <Link to="/contacts"><button type="button" className="btn-home">Mis contactos</button></Link>

    </section>
  );
}

export default Transfer;
