import React from 'react';
import Pip from './Pip'; // Import Pip komponent

function Feed({ pips }) { // Modtag pips som prop
  return (
    <div className="feed">
      <h2>Latest Pips</h2>
      {pips.map((pip) => (
        <Pip 
          key={pip.id} 
          avatar={pip.avatar} 
          username={pip.username} 
          message={pip.message} 
        />
      ))}
    </div>
  );
}

export default Feed;
