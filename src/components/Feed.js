import React from 'react';
import Pip from './Pip'; // Import Pip komponent
import Modal from './Modal'; // Import Modal komponent

function Feed({ pips }) { // Modtag pips som prop
  return (
    <div className="feed">
      <button onclick="openModal(modal-open)">Opret pip</button>

      <div>
      <h2>Latest Pips</h2>
      {pips.map((pip) => (
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
