import React, { useState } from 'react';


const InfoContact = (items) => {

    const { name, bank, email, rut, typeAccount, numberAccount } = items.location.state.propPassed
    const [amount, setAmount] = useState('');
    return (
        <div>
            <p>{name}</p>
            <p>{bank}</p>
            <p>{email}</p>
            <p>{rut}</p>
            <p>{typeAccount}</p>
            <p>{numberAccount}</p>
            <br />
            <label className="H3">Monto :</label>
            <input
                className="input"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <button>Transferir</button>
        </div>
    )
}
export default InfoContact;