import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../home/Home.css';

function Transfer() {
    return (
        <section>
            <BrowserRouter>
                <Link> <button type="button" className="btn-home">Compartir Formulario</button></Link>
                <Link><button type="button" className="btn-home">Mis contactos</button></Link>
            </BrowserRouter>
        </section>
    )
};
export default Transfer;