import React from 'react';
import ContacView from './Contact';
import { H2 } from '../elements/H2';
import { Link } from 'react-router-dom';
import './ContactScreen.css';

export default () => (
  <section className="container-btn-contact">
    <div className="container-new-contact">
      <H2>Nuevo contacto</H2>
      <a href="https://api.whatsapp.com/send?&text=https:https://datos-bancarios-e6ed7.web.app/" data-action="share/whatsapp/share" target="_blank"><button type="button" className="btn-new-contact">Pedir datos a contacto de WhatsApp</button></a>
      <Link to="/form"><button type="button" className="btn-new-contact">Ingresar datos de nuevo contacto</button></Link>
      </div>
    <H2>Contactos guardados</H2>
    <ContacView />
  </section>
);