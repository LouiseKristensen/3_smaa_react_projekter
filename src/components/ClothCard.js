import React from 'react';

// Styling for hver enkelt cloth card (tøj-kort)
const ClothCardStyle = {
    margin: '16px',              
    borderRadius: '8px',         
    border: 'Solid',             
    padding: '12px',              
    width: '200px',              
}

// Styling for containeren der holder flere tøj-kort
const ClothCardLokationStyle = {
    display: 'flex',              
    flexWrap: 'wrap',            
    gap: '15px',                 
    justifyContent: 'center',                  
}

// Styling for knappen der tilføjer tøj til indkøbskurven
const ButtonStyle = {
    padding: '10px 20px',        
    fontSize: '12px',             
    borderRadius: '5px',         
    backgroundColor: 'lightgrey', 
    color: '#000',                
    cursor: 'pointer',            
}

// Funktionel komponent der repræsenterer et tøj-kort
function ClothCard({ clothOptions, onAddToCart }) {
    return (
        // Container der holder alle tøj-kortene
        <div style={ClothCardLokationStyle}>
            {
                // Gennemgår hver cloth (tøj) i clothOptions array'et og render et kort for hver
                clothOptions.map(cloth => (
                    <div key={cloth.id} style={ClothCardStyle}>
                        <h3>{cloth.brand}</h3>            {/* Tøjbrand */}
                        <p><strong>Model:</strong> {cloth.model}</p>   {/* Modelnavn */}
                        <p><strong>Size:</strong> {cloth.size}</p>     {/* Størrelse */}
                        <p><strong>Price:</strong> ${cloth.price}</p>  {/* Pris */}
                        <p><strong>Color:</strong> {cloth.color}</p>   {/* Farve */}
                        <p><strong>Description:</strong> {cloth.description}</p> {/* Beskrivelse */}
                        
                        {/* Knappen der tilføjer tøjet til indkøbskurven */}
                        <button type='button' onClick={() => onAddToCart(cloth)} style={ButtonStyle}>
                            Tilføj til indkøbskurv
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default ClothCard;
