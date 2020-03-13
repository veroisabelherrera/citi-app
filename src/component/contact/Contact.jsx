import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const ContactView = () => {
  const contact = Contact()

  return (
    <div>
      {contact.map((items, i) =>
        <div key={i}>
          <Link to={{
            pathname: "/InfoContact",
            state: { propPassed: items }
          }}><button className="btn-contact"> <h3>{items.name}</h3>
              <p>{items.bank}</p></button></Link>
        </div>

      )}
    </div>
  )

}

export default ContactView;


