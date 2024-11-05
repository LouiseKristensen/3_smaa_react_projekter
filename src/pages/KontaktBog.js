import React, { useState } from "react";
import Modal from "../components/ContactModal";
import ContactCard from "../components/ContactCard";

const KontaktBogStyle = {
    display: 'flex',
    maxWidth: '100vw',
    justifyContent: 'Center',
    flexWrap: 'Wrap'
}

const KontaktBog = () => {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState([]);

  const handleModalSubmit = (formData) => {
    setContacts([...contacts, formData]);
    setShowModal(false); // Close modal after submit
  };

  return (
    <div className="App">
      <h1>Kontaktbog</h1>
      <button onClick={() => setShowModal(true)}>Tilføj kontakt</button>

      {/* Modal component */}
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onSubmit={handleModalSubmit}
        />
      )}

      {/* Card component */}
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <ContactCard key={index} data={contact} />
        ))}
      </div>
    </div>
  );
};



export default KontaktBog