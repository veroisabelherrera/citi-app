import React from 'react';


const infoContact = (name, bank, email, rut) => {
    //console.log(email)
    //const infocontact = Contact()
    return (
        <div>
            <h3>{name}</h3>
            <p>{bank}</p>
            <p>{email}</p>
            <p>{rut}</p>
        </div>

    )
}
export default infoContact