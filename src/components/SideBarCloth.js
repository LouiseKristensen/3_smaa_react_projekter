import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ClothCard from './ClothCard';

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
    flexDirection: 'Column',
    backgroundColor: 'lightGrey',
}

const sideMenuStyle = {
    menuPlacement: {
        display: 'flex',
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
    },
    
};

const cartStyle = {
  display: 'flex',

} 

function SideBarCloth({ cartItems }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
      setIsOpen(true);
  }

  function closeModal() {
      setIsOpen(false);
  }

  return (
    <div style={sidebarStyle}>
        <h2>Indkøbskurv</h2>
        <div style={cartStyle}>
        {cartItems.length === 0 ? (
            <p>Indkøbskurven er tom</p>
        ) : (
            <ul style={sideMenuStyle}>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <p>{item.brand} - {item.model}</p>
                        <p><strong>pris:</strong> ${item.price}</p>
                    </li>
                ))}
            </ul>
          
        )}
        </div>
    </div>
);
}


export default SideBarCloth; 
