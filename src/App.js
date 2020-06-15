import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddContact from "./components/contact/AddContact";
import ContactList from "./components/contact/ContactList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <AddContact />
          </div>
          <div className="col-md-8">
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
