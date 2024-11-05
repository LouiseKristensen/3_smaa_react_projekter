import React, { useState } from "react";

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
      // marginRight: '10px',
      // padding: '10px 20px',
      // backgroundColor: '#007BFF',
      // color: 'white',
      // border: 'none',
      // borderRadius: '5px',
      // cursor: 'pointer',
      padding: '10px 20px',
      borderRadius: '5px',
      backgroundColor: '#3d3c3c',
      color: 'white',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
    },
    closeButton: {
      // backgroundColor: '#f44336',
      // marginTop: '12px',
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

const Modal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    firm: "",
    position: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the data to the parent component (App)
  };

  return (
    <div className="modal" style={modalStyles.modal}>
      <div className="modal-content" style={modalStyles.modalContent}>
      <button style={modalStyles.closeButton} onClick={onClose}>X</button>
        <h2>Indtast information</h2>
        <form onSubmit={handleSubmit}>
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
          <div style={modalStyles.buttonContainer}>
          <button style={modalStyles.button} type="submit">Tilføj</button>
        
        {/* <button style={modalStyles.closeButton} onClick={onClose}>Close</button> */}
        </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
