import React, { useState } from 'react';
import CharCount from './CharCount';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Modal({ onSubmit, onClose }) {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const maxChars = 255;

  // Håndterer indsendelsen af formularen
  const handleSubmit = (e) => {
    e.preventDefault(); // Forhindrer standard formularindsendelse
    if (username && message) {
      onSubmit(username, message); // Kalder funktionen fra App
      setUsername(''); // Nulstiller inputfelter
      setMessage('');
    }
  };

    return (
      <div>
         <button onclick="openModal(Modal)">Opret pip</button>
         
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Opret en pip</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mb-3">
            <input type="text" className="form-control" id="username" name="username" placeholder="Dit brugernavn" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" id="textarea" name="textarea" placeholder="Hvad sker der?" maxLength="255"></textarea>
            <p id="charCount">255 characters remaining</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Post pip</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>
    );
  }
  
  export default Modal;
  