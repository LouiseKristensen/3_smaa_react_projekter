import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal'; // Import af Modal komponent til brug i SideBarCloth
import { useState } from 'react'; // Import af useState hook til at håndtere modal state
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import af FontAwesome for ikoner
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Shopping cart ikon
import ClothCard from './ClothCard'; // Import af ClothCard komponent

// Definerer brugerdefinerede stilarter til modal (popup) vinduet
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

// Styling for sidebar (venstremenu) hvor indkøbskurven vises
const sidebarStyle = {
    borderRadius: '8px',          
    padding: '12px',              
    display: 'flex',              
    height: '110vh',               
    borderRight: 'solid',         
    flexDirection: 'Column',     
    backgroundColor: 'lightGrey', 
}

// Styling for side-menuen, herunder shopping cart ikonet og indhold
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
        cursor: 'pointer',             
    },
};

// Styling for selve indkøbskurven, viser varerne i sidebar
const cartStyle = {
  display: 'flex',                
} 

// Funktionel komponent til at vise sidebaren (indkøbskurv)
function SideBarCloth({ cartItems }) {
  // useState hook til at håndtere åben/lukket tilstand af modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // Funktion til at åbne modal
  function openModal() {
      setIsOpen(true);
  }

  // Funktion til at lukke modal
  function closeModal() {
      setIsOpen(false);
  }

  return (
    <div style={sidebarStyle}>
        <h2>Indkøbskurv</h2>
        <div style={cartStyle}>
        {/* Hvis indkøbskurven er tom, vis en besked */}
        {cartItems.length === 0 ? (
            <p>Indkøbskurven er tom</p>
        ) : (
            // Ellers vis indholdet af kurven
            <ul style={sideMenuStyle}>
                {cartItems.map((item) => (
                    // For hver vare i cartItems arrayet, vis et list item
                    <li key={item.id}>
                        <p>{item.brand} - {item.model}</p>        {/* Varebrand og model */}
                        <p><strong>pris:</strong> ${item.price}</p>  {/* Varepris */}
                    </li>
                ))}
            </ul>
        )}
        </div>
    </div>
  );
}

export default SideBarCloth;
