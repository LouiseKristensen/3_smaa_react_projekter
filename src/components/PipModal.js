import React, { useState } from 'react';
import CharCount from './CharCount';
import './PipModal.css';

function PipModal({isOpen, onClose, onSubmit}) {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const maxChars = 255;

  const handleAddPip = () => {
    if (!username || !message) {
      setError("Please fill out both the username and messege fields.");
    } else {
      setError(null);
      onSubmit(username, message);
      console.log("New pip:", { username, message });
      setUsername('');
      setMessage('');
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <form onSubmit={handleAddPip}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={maxChars}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <CharCount maxChars={maxChars} currentLength={message.length} />

          <button type="submit">Send Pip</button>
        </form>
      </div>
    </div>
  );
}

export default PipModal;