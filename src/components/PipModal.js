import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import CharCount from './CharCount';
import Feed from './Feed';
import PipModalStyles from './PipModalStyles.css';

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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function PipModal () {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [pips, setPips] = useState([]);
  const maxChars = 255;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(e) {
    if (username && message) {
      const newPip = { username, message, id: Date.now() };
      setPips([...pips, newPip]);
      setUsername('');
      setMessage('');
      closeModal();
    } else {
      setError('Both fields are required.');
    }
  }

  return (
    <div>
      <button onClick={openModal} className="modal-button">Opret pip</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="modal-close">x</button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="modal-title">Opret en ny pip</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="modal-input"
          />
         <div style={{position: 'relative', width: '100%' }}>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={maxChars}
              className="modal-textarea"
            />
            <div className="char-count">
              <CharCount maxChars={maxChars} currentLength={message.length} />
            </div>
          </div>
          <button type="submit" className="modal-submit">Send Pip</button>
        </form>
      </Modal>

      <Feed pips={pips} setPips={setPips}/>
    </div>
  );   
}
