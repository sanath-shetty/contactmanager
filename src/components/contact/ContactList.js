import React, { useState, useEffect } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    loadContacts();
  }, []);

  // load contacts to the state.
  const loadContacts = () => {
    let allContacts = JSON.parse(localStorage.getItem("contacts"));
    console.log(allContacts);
    if (!allContacts) {
      setMessage("Contact list empty.");
    } else {
      setContacts(allContacts);
    }
  };

  const eraseAll = () => {
    localStorage.clear();
    loadContacts();
  };

  const editContact = (contact) => {};

  const deleteContact = (contact) => {};
  return (
    <div>
      <h3>Displaying all contacts</h3>
      <button className="btn btn-primary" onClick={() => loadContacts()}>
        Refresh
      </button>
      <button className="btn btn-secondary" onClick={() => eraseAll()}>
        Erase Contacts
      </button>
      <p>{message}</p>

      {contacts.map((contact) => (
        <div className="card my-2" key={contact.name}>
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
