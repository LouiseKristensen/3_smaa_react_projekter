// Importerer nødvendige komponenter og hooks
import React, { useState } from "react";
import Modal from "../components/ContactModal";  // Modal til at tilføje kontakter
import ContactCard from "../components/ContactCard";  // Kontaktkort for at vise gemte kontakter

// Styling for kontaktbogens layout, der gør brug af flexbox for at arrangere elementerne
const ContactBookStyle = {
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    gap: '40px'  
}

// Styling til knappen, som åbner modalvinduet
const ButtonStyle = {
    padding: '10px 20px',  
    fontSize: '16px',          
    borderRadius: '5px',            
    backgroundColor: 'lightgrey',   
    color: '#000',                   
    cursor: 'pointer',                         
}

// Styling for placeringen af knappen, centrering af den i containeren
const ButtonPlacementStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingTop: '150px', 
    width: '50%', 
    textAlign: 'center' 
}

// Styling til tekstområdet, hvor introduktion og instruktioner vises
const TextStyle = {
    flex: '1', 
    padding: '10px', 
    paddingLeft: '50px', 
    maxWidth: '600px', 
    lineHeight: '1.6' 
}

// Kontaktbogskomponenten
const KontaktBog = () => {
  // State for at styre visningen af modal og gemte kontakter
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState([]); // Initialiserer en tom liste af kontakter

  // Funktion til at håndtere indsendelsen af kontaktformularen
  const handleModalSubmit = (formData) => {
    setContacts([...contacts, formData]); // Tilføjer den nye kontakt til listen
    setShowModal(false); // Lukker modalvinduet efter submission
  };

  return (
    <div className="App">
        {/* Overskrift for Kontaktbog */}
        <h1 
            style={{ borderBottom: '5px solid black', paddingBottom: '15px', paddingLeft: '50px'}}>
        Kontaktbog</h1> 

        {/* Layout for kontaktbogsbeskrivelsen og knappen */}
        <div style={ContactBookStyle }>
            <div style={TextStyle}>
                <p><strong>Velkommen til din kontaktbog!</strong></p>
                <p>Her finder du alle dine nuværende kontakter samlet ét sted, så du nemt kan holde overblikket over venner, familie og kolleger.</p>
                <br/>
                <p><strong>Tilføj nye kontakter:</strong></p>
                <p>Har du mødt nye mennesker, som du gerne vil gemme oplysninger om? Klik på "Tilføj kontakt" for at indtaste navn og kontaktoplysninger, så de også kan være en del af dit netværk.</p>
            </div>
            {/* Button for at åbne modal */}
            <div style={ButtonPlacementStyle}>
                <button onClick={() => setShowModal(true)} style={ButtonStyle}>Tilføj kontakt</button>
            </div>
        </div>

        {/* Liste af kontakter */}
        <h2 style={{paddingLeft: '50px',
    paddingBottom: '15px',
    paddingTop: '50px',
    fontSize: '24px',
    color: '#333',
    borderBottom: '2px solid #ddd',}}>Dine kontakter</h2>

        {/* Modal komponent, der vises når showModal er true */}
        {showModal && (
          <Modal
            onClose={() => setShowModal(false)} // Lukker modal
            onSubmit={handleModalSubmit} // Sender de indtastede data
          />
        )}

        {/* Vis alle kontaktkort */}
        <div className="contact-list">
          {contacts.map((contact, index) => (
            <ContactCard key={index} data={contact} /> // Genererer kontaktkort for hver kontakt
          ))}
        </div>
    </div>
  );
};

// Eksporterer KontaktBog-komponenten så den kan bruges andre steder
export default KontaktBog;
