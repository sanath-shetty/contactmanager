import React, { useState, useEffect } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem("contacts")));
  }, []);

  const refresh = () => {
    setContacts(JSON.parse(localStorage.getItem("contacts")));
  };

  const editContact = (contact) => {};

  const deleteContact = (contact) => {};
  return (
    <div>
      <h3>Displaying all contacts</h3>
      <button className="btn btn-primary" onClick={() => refresh()}>
        Refresh
      </button>
      {contacts.map((contact) => (
        <div className="card my-2">
          <div className="card-body">
            <h4>{contact.name}</h4>
            <p>{contact.phonenumber}</p>
            <button
              className="btn btn-dark"
              onClick={(contact) => editContact(contact)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={(contact) => deleteContact(contact)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
