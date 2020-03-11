import React, { useState, useEffect } from 'react';
import db from '../../firebase-config';

function Contact() {
  let [contact, setContact] = useState([])

  useEffect(() => {
    db
      .collection("Form ")
      .onSnapshot((snapshot) => {
        const newcontac = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setContact(contact = newcontac)
      })
  }, [])
  return contact
}
//const deleteContact = () => {
//const contact = Contact()
//db.collection('Form').doc(contact.id).delete()
//}
//<div>
//<button onClick={deleteContact}>Eliminar</button>
//</div>
const infoContact = (name, bank, email, rut) => {
  console.log(email);
  console.log(name);
  console.log(rut);
  console.log(bank);
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

const ContactView = () => {
  const contact = Contact()
  return (
    <div>
      {contact.map((Contact, i) =>
        <div key={i}>
          {console.log(i)}
          <h3>{Contact.name}</h3>
          <p>{Contact.bank}</p>
          <button onClick={() => { infoContact(Contact.name, Contact.bank, Contact.email, Contact.rut, Contact.numberAccount) }}>Transferir</button>
        </div>
      )}
    </div>
  )
}

export default ContactView;

//<a href="htts://api.whatsapp.com/send?&text=https:https://datos-bancarios-e6ed7.web.app/" data-action="share/whatsapp/share">Enviar por WhatsApp</a>