// import React, { useState } from 'react';
// import Pip from './Pip'; // Import Pip komponent
// import PipModal from './PipModal'; // Import Modal komponent

// function Feed() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handlePipSubmit = (username, message) => {
//     console.log("New pip submitted:", { username, message });
//     handleCloseModal();
//   };

//   return (
//     <div>
//       {/* <button onClick={handleOpenModal}>Opret Pip</button> */}
//       <PipModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         onSubmit={handlePipSubmit}
//       />
//       {/* Feed-indhold kan vises her */}
//     </div>
//   );
// }

// export default Feed;

// import { useState } from 'react';

function Feed({ pips }) {
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const [error, setError] = useState(null);
  // const [pips, setPips] = useState([]);


  return (
    <div style={{ marginTop: '20px', gap: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {pips.map((pip) => (
        <div key={pip.id} style={{
          border: 'solid black',
          borderRadius: '8px',
          padding: '15px',
          width: '75%',
          backgroundColor: '#fff',
          marginBottom: '15px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: 'black' }}>{pip.username}</h3>
          <p style={{ fontSize: '14px', color: '#555' }}>{pip.message}</p>
        </div>
    ))}
    </div>
  );
}

export default Feed;
