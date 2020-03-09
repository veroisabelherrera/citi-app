import React from 'react';
import { render } from '@testing-library/react';

function Form() {
    render()
    return (
        <div>
            <form action="">
                <label htmlFor="">Nombre y Apellido</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Rut</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Correo</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Banco</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Tipo de Cuenta</label>
                <input type="text" name="" id="" />
                <label htmlFor="">N° de Cuenta </label>
                <input type="text" name="" id="" />
            </form>
            <button>Enviar</button>
        </div>
    );

}

export default Form;
