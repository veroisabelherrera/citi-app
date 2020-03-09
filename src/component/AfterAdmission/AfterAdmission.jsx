import React from 'react';
import { render } from '@testing-library/react';

function AfterAdmission() {
    render()
    return (
        <div>
            <button type="button" name="profile" value="Mi Perfil">Mi Perfil</button>
            <button type="button" value="Pagar Cuentas">Pagar Cuentas</button>
            <button type="button" value="Transferir">Transferir</button>
        </div>
    );
}
export default AfterAdmission;