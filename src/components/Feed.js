import React, { useState } from 'react';
// import Pip from './Pip'; // Import Pip komponent
import PipModal from './PipModal'; // Import Modal komponent

function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePipSubmit = (username, message) => {
    console.log("New pip submitted:", { username, message });
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Opret Pip</button>
      <PipModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handlePipSubmit}
      />
      {/* Feed-indhold kan vises her */}
    </div>
  );
}

export default Feed;
