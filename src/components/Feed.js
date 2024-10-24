import React, { useState } from 'react';
import Pip from './Pip'; // Import Pip komponent
import Modal from './Modal'; // Import Modal komponent

function Feed({ pips }) { // Modtag pips som prop
  const [showModal, setShowModal] = useState(false); 
  const [pipsList, setPipsList] = useState(pips);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSubmit = (username, message) => {
    const newPip = { id: Date.now(), username, message }; // Opret ny pip
    setPipsList([...pipsList, newPip]); // Opdater pips listen
    closeModal(); // Luk modal
  };

  return (
    <div className="feed">
      <button onClick={openModal}>Opret pip</button>

      {showModal && (
        <Modal onSubmit={handleSubmit} onClose={closeModal} />
      )}

      <div>
        <h2>Latest Pips</h2>
        {pipsList.map((pip) => (
          <Pip 
            key={pip.id} 
            username={pip.username} 
            message={pip.message} 
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
