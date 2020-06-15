import React, { useState, useEffect } from "react";

const ContactList = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    setContact(JSON.parse(localStorage.getItem("contact")));
  }, []);
  return (
    <div>
      <h3>Displaying all contacts</h3>
      <div className="card">
        <div className="card-body">
          <h4>MAnja</h4>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
