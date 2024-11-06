import React, { useState } from "react";
import Modal from "../components/ContactModal";
import ContactCard from "../components/ContactCard";

const ContactBookStyle = {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    gap: '40px' 
}

const ButtonStyle = {
    padding: '10px 20px',  
    fontSize: '16px',           
    borderRadius: '5px',            
    backgroundColor: 'lightgrey',   
    color: '#000',                   
    cursor: 'pointer',                           
}

const ButtonPlacementStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: '150px', 
    width: '50%', 
    textAlign: 'center'
}

const TextStyle = {
    flex: '1', 
    padding: '10px', 
    paddingLeft: '50px',
    maxWidth: '600px', 
    lineHeight: '1.6'}


const KontaktBog = () => {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState([]);

  const handleModalSubmit = (formData) => {
    setContacts([...contacts, formData]);
    setShowModal(false); // Close modal after submit
  };

  return (
    <div className="App">
        <h1 
            style={{ borderBottom: '5px solid black', paddingBottom: '15px', paddingLeft: '50px'}}>
        Kontaktbog</h1> 
      <div style={ContactBookStyle }>
        <div style={TextStyle}>
            <p><strong>Velkommen til din kontaktbog!</strong></p>
            <p>Her finder du alle dine nuværende kontakter samlet ét sted, så du nemt kan holde overblikket over venner, familie og kolleger.</p>
            <br/>
            <p><strong>Tilføj nye kontakter:</strong></p>
            <p>Har du mødt nye mennesker, som du gerne vil gemme oplysninger om? Klik på "Tilføj kontakt" for at indtaste navn og kontaktoplysninger, så de også kan være en del af dit netværk.</p>
        </div>
        <div style={ButtonPlacementStyle}>
            <button onClick={() => setShowModal(true)} style={ButtonStyle}>Tilføj kontakt</button>
        </div>
      </div>

        <h2 style={{paddingLeft: '50px',
    paddingBottom: '15px',
    paddingTop: '50px',
    fontSize: '24px',
    color: '#333',
    borderBottom: '2px solid #ddd',}}>Dine kontakter</h2>
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