// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from "react";


// function SidebarCloth({ cartItems, onRemoveFromCart }){
//     const [showModal, setShowModal] = useState(false);
    
//     const sideMenuStyle = {
//         padding: '16px',
//         justifyContent: 'center',
//         alignItems: 'center',
//         listStyle: 'none',
//         borderRadius: '12px'
//         }

//         const sidebarStyle = {
//             borderRadius: '8px',
//             padding: '12px', 
//             display: 'flex',
//             height: '110vh',
//             borderRight: 'solid',
//             backgroundColor: 'lightGrey',
//             justifyContent: 'center',
//         }

//     return (
//         <div className="sidebar" style={sidebarStyle}>
//             <div className="menu" style={sideMenuStyle}>
//                     <li><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '24px', marginTop: '50px' }}/></li>
//             </div>
//         </div>
//     )
// }

// export default SidebarCloth; 

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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

const sidebarStyle = {
    borderRadius: '8px',
    padding: '12px', 
    display: 'flex',
    height: '110vh',
    borderRight: 'solid',
    backgroundColor: 'lightGrey',
    justifyContent: 'center',
}

const sideMenuStyle = {
    menuPlacement: {
        padding: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
        borderRadius: '12px',
    },
    shoppingCart: {
        background: 'none',
        border: 'none',   
        padding: 0,         
        cursor: 'pointer'
    }
};


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function SideBarCloth ({ cartItems, onRemoveFromCart }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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

  return (
    <div className="sidebar" style={sidebarStyle}>
    <div className="menu" style={sideMenuStyle.menuPlacement}>
    <div>
        <button onClick={openModal} style={sideMenuStyle.shoppingCart}>
            <FontAwesomeIcon icon={faShoppingCart} style={{fontSize: '24px', marginTop: '50px'}}/>
        </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Shopping Cart Modal">
        
        <button onClick={closeModal} className="modal-close" style={{ position: 'absolute', top: '10px', right: '10px' }}>
            x
        </button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="modal-title" style={{ textAlign: 'center', marginBottom: '20px' }}>Indkøbskurv</h2>
        {/* <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}> */}
        
        
        {/* </form> */}
      </Modal>

    </div>
    </div>
    </div>
  );   
}
