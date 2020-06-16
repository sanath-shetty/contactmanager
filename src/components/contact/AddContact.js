import React, { useState } from "react";

const AddContact = () => {
  const [contact, setContact] = useState({});

  const [message, setMessage] = useState("");

  const onInputChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onFormSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    console.log(contact);
    let contacts = [];
    contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    setMessage("Contact has been added.");
  };

  return (
    <div>
      <h3>Add Contact</h3>
      <h4>{message}</h4>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the name"
            name="name"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter phone number"
            name="phonenumber"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
