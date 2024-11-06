// Importerer React og ReactDOM fra React-biblioteket
import React from 'react';
import ReactDOM from 'react-dom';

// Importerer Modal fra 'react-modal'-biblioteket for at håndtere modaler
import Modal from 'react-modal';

// Importerer useState fra React til at håndtere komponentens tilstande
import { useState } from 'react';

// Importerer CharCount-komponenten til visning af tegn-tælling og Feed-komponenten til at vise pip-feedet
import CharCount from './CharCount';
import Feed from './Feed';

// Importerer CSS til Modal
import PipModalStyles from './PipModalStyles.css';

// Definerer brugerdefinerede styles til modalens indhold og overlay
const customStyles = {
  content: {
    top: '50%',               
    left: '50%',               
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',      
    transform: 'translate(-50%, -50%)', 
    width: '400px',           
    padding: '20px',           
    borderRadius: '10px',      
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
    backgroundColor: '#f9f9f9', 
    border: 'none'            
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  }
};

// Binder modal til HTML-elementet med id 'root' for tilgængelighed (vigtigt ift. skærmlæsere)
Modal.setAppElement('#root');

// PipModal-komponenten, som håndterer visning af modalen og styring af pips
export default function PipModal () {
  let subtitle;  // Lokal variabel til at gemme reference til modaltitel-elementet

  // State hooks til håndtering af modaltilstand, input-felter og fejl
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [username, setUsername] = useState(''); // Gemmer brugernavn
  const [message, setMessage] = useState('');   // Gemmer beskedindhold
  const [error, setError] = useState(null);     // Gemmer fejlbeskeder
  const [pips, setPips] = useState([]);         // Liste over pips
  const maxChars = 255;                         // Maksimum antal tegn tilladt for besked

  // Funktion til at åbne modal
  function openModal() {
    setIsOpen(true);
  }

  // Funktion til handling efter at modal er åbnet
  function afterOpenModal() {
    // Ændrer farven på modalens titel
    subtitle.style.color = 'black';
  }

  // Funktion til at lukke modal
  function closeModal() {
    setIsOpen(false);
  }

  // Funktion til at håndtere formular-submission
  function handleSubmit(e) {
    e.preventDefault(); // Forhindrer siden i at reloade

    // Tjekker om både brugernavn og besked er udfyldt
    if (username && message) {
      const newPip = { username, message, id: Date.now() }; // Opretter nyt pip-objekt med unikt id
      setPips([...pips, newPip]);       // Tilføjer det nye pip til pips-listen
      setUsername('');                  // Nulstiller brugernavn-feltet
      setMessage('');                   // Nulstiller besked-feltet
      closeModal();                     // Lukker modal
    } else {
      setError('Both fields are required.'); // Viser fejlbesked, hvis et felt mangler
    }
  }

  return (
    <div>
      {/* Knappen til at åbne modal */}
      <button onClick={openModal} className="modal-button">Opret pip</button>
      
      {/* Modal-komponent med brugerdefineret styling og funktioner */}
      <Modal
        isOpen={modalIsOpen}          // Kontrollerer om modal er åben
        onAfterOpen={afterOpenModal}   // Funktion efter modal er åbnet
        onRequestClose={closeModal}    // Funktion til at lukke modal, når man klikker udenfor modalen
        style={customStyles}           // Brugerdefinerede styles
        contentLabel="Example Modal"   // Beskrivelse til skærmlæsere
      >
        {/* Luk-knap til modal */}
        <button onClick={closeModal} className="modal-close">x</button>
        
        {/* Titel med reference til styling efter modal åbnes */}
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="modal-title">Opret en ny pip</h2>
        
        {/* Formular til at oprette nyt pip */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Brugernavn-input */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="modal-input"
          />

          {/* Besked-input med tæller */}
          <div style={{ position: 'relative', width: '100%' }}>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={maxChars}      // Maksimum antal tegn
              className="modal-textarea"
            />
            <div className="char-count">
              <CharCount maxChars={maxChars} currentLength={message.length} /> {/* Viser resterende tegn */}
            </div>
          </div>

          {/* Submit-knap til at sende pip */}
          <button type="submit" className="modal-submit">Send Pip</button>
        </form>
      </Modal>

      {/* Feed-komponent, som viser alle oprettede pips */}
      <Feed pips={pips} setPips={setPips} />
    </div>
  );   
}

