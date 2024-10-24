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
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form id="modal-open">
                <div className="mb-3">
                  <img
                    className="profilepicture"
                    src="https://api.dicebear.com/9.x/dylan/svg?seed=Aidan&radius=50&hairColor=000000&mood=confused,happy,hopeful,neutral,sad,superHappy"
                    alt="avatar"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="col-form-label">
                    Username:
                  </label>
                  <input type="text" className="form-control" id="username" name="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="textarea" className="col-form-label">
                    Pip-message:
                  </label>
                  <textarea className="form-control" id="textarea" name="textarea" maxLength="255"></textarea>
                  <p id="charCount">255 characters remaining</p>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" id="btnSubmit" className="btn btn-primary">
                Send pip
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  