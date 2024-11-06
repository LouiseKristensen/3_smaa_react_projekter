// Importerer React og useState-hook til at håndtere lokal tilstand i Modal-komponenten
import React, { useState } from "react";

// Definerer et objekt, modalStyles, med styling for forskellige modal-elementer
const modalStyles = {
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '20px',
        width: '400px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        position: 'relative',
    },
    input: {
        width: '95%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#3d3c3c',
        color: 'white',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        color: '#999',
    },
};

// Modal-komponenten, som modtager onClose og onSubmit som props
const Modal = ({ onClose, onSubmit }) => {
  // Tilstand til at gemme form-data, initialiseret som tomme felter
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    firm: "",
    position: "",
  });

  // Håndterer ændringer i inputfelterne og opdaterer formData tilstand
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Opdaterer det relevante felt i formData baseret på input-feltets navn
    });
  };

  // Håndterer formularindsendelsen
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Kalder onSubmit-funktionen fra parent-komponenten med de indtastede data
  };

  // JSX-struktur for Modal-komponenten
  return (
    <div className="modal" style={modalStyles.modal}>
      <div className="modal-content" style={modalStyles.modalContent}>
        {/* Lukke-knap, som aktiverer onClose-funktionen til at lukke modal */}
        <button style={modalStyles.closeButton} onClick={onClose}>X</button>
        <h2>Indtast information</h2>
        <form onSubmit={handleSubmit}>
          {/* Inputfelter til brugeren med styling og håndtering af ændringer */}
          <input
            style={modalStyles.input}
            type="text"
            name="firstName"
            placeholder="Fornavn"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            style={modalStyles.input}
            type="text"
            name="lastName"
            placeholder="Efternavn"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            style={modalStyles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            style={modalStyles.input}
            type="tel"
            name="phone"
            placeholder="telefonnummer"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            style={modalStyles.input}
            type="text"
            name="firm"
            placeholder="Firma"
            value={formData.firm}
            onChange={handleInputChange}
            required
          />
          <input
            style={modalStyles.input}
            type="text"
            name="position"
            placeholder="Stilling"
            value={formData.position}
            onChange={handleInputChange}
            required
          />
          {/* Container for submit-knappen */}
          <div style={modalStyles.buttonContainer}>
            <button style={modalStyles.button} type="submit">Tilføj</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Eksporterer Modal-komponenten, så den kan bruges i andre komponenter
export default Modal;

