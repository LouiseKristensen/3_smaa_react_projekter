import React, { useState } from 'react';
import CharCount from './CharCount';


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
            <div className="modal-body">
              <form id="modal-open">
                <div>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                  </button>
                </div>
                <h2>Opret en pip</h2>
                <div className="mb-3">
                  <input type="text" className="form-control" id="username" name="username" placeholder="Dit brugernavn" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="textarea" name="textarea" placeholder="Hvad sker der?" maxLength="255"></textarea>
                  <p id="charCount">255 characters remaining</p>
                </div>
              </form>
            </div>
            <div>
              <button type="button" id="btnSubmit" className="btn btn-primary">
                Post pip
              </button>
            </div>
          </div>
    );
  }
  
  export default Modal;
  