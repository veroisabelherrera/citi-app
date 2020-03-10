import React from 'react';
import { render } from '@testing-library/react';
import './Form.css';

function Form() {
  render();
  return (
    <div className="form-container">
      <form action="">
        <label htmlFor="Name and Lastname">Nombre y Apellido</label>
        <input type="text" name="Name and Lastname" id="" />
        <label htmlFor="Rut">Rut</label>
        <input type="number" name="Rut" id="" />
        <label htmlFor="Email">Correo</label>
        <input type="email" name="Email" id="" />
        <label htmlFor="Bank">Banco</label>
        <select id="bank" name="select">
          <option value="0">Elige tu Banco</option>
          <option value="1">Banco Bice</option>
          <option value="2">BBVA</option>
          <option value="3">Banco Consorcio</option>
          <option value="4">Banco de Chile - Edwards Citi</option>
          <option value="5">Banco Del Desarrollo</option>
          <option value="6">Banco Estado</option>
          <option value="7">Banco Falabella</option>
          <option value="8">Banco Internacional</option>
          <option value="9">Banco Itaú</option>
          <option value="10">Banco Paris</option>
          <option value="11">Banco Ripley</option>
          <option value="12">Banco Santander - Banefe</option>
          <option value="13">Banco Security</option>
          <option value="14">Bci - Tbanc - Nova</option>
          <option value="15">Coopeuch</option>
          <option value="16">Corpbanca</option>
          <option value="17">HSBC Bank</option>
          <option value="18">Los Héroes</option>
          <option value="11">Scotiabank</option>
        </select>
        <label htmlFor="Account Type">Tipo de Cuenta</label>
        <select name="account-type" id="">
          <option value="0">Elige el tipo de cuenta</option>
          <option value="1">Cuenta de Ahorro</option>
          <option value="2">Cuenta Vista</option>
          <option value="3">Cuenta Corriente</option>
        </select>
        <label htmlFor="Account Number">N° de Cuenta </label>
        <input type="text" name="" id="" />
      </form>
      <button type="button" className="Btn">Enviar</button>
    </div>
  );
}
export default Form;
