import React from 'react';

const ClothCardStyle = {
    margin: '16px',
    borderRadius: '8px',
    border: 'Solid',
    padding: '12px',
    width: '200px', 
}

const ClothCardLokationStyle = {
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: '15px', 
    justifyContent: 'center',
    // width: '75%',
}

const ButtonStyle = {
    padding: '10px 20px',  
    fontSize: '12px',           
    borderRadius: '5px',            
    backgroundColor: 'lightgrey',   
    color: '#000',                   
    cursor: 'pointer',                           
}


    function ClothCard ({ clothOptions, onAddToCart }) {


    return (
        <div style={ClothCardLokationStyle}>{
            clothOptions.map(cloth => (
                <div key={cloth.id} style={ClothCardStyle}>
                    <h3>{cloth.brand}</h3>
                    <p><strong>Model:</strong> {cloth.model}</p>
                    <p><strong>Size:</strong> {cloth.size}</p>
                    <p><strong>Price:</strong> ${cloth.price}</p>
                    <p><strong>Color:</strong> {cloth.color}</p>
                    <p><strong>Description:</strong> {cloth.description}</p>
                    <button type='button' onClick={() => onAddToCart(cloth)} style={ButtonStyle}>Tilføj til indkøbskurv</button>
                </div>
            ))
        }
            
        </div>
    )
}

export default ClothCard; 