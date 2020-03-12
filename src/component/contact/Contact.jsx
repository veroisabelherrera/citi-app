import React, { useState, useEffect } from 'react';
import db from '../../firebase-config';
import infoContact from './InfoContact';

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


const ContactView = () => {
  const contact = Contact()

  return (
    <div>
      {contact.map((Contact, i) =>
        <div key={i}>
          <button className="btn-contact" onClick={() => { infoContact(Contact) }}> <h3>{Contact.name}</h3>
            <p>{Contact.bank}</p></button>
        </div>
      )}
    </div>
  )

}

export default ContactView;


//<a href="htts://api.whatsapp.com/send?&text=https:https://datos-bancarios-e6ed7.web.app/" data-action="share/whatsapp/share">Enviar por WhatsApp</a>