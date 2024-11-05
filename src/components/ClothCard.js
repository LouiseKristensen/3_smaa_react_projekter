import React, { useState } from 'react';

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

function ClothCard ({onAddToCart}){
    const [clothOptions, setClothOptions] = useState(
        [{id: 1, 
            brand: "Nike", 
            model: "Air Hoodie", 
            size: "M", 
            price: 399, 
            color: "Black", 
            description: "A comfortable hoodie made from soft cotton, perfect for casual wear."}, 
        {id: 2, 
            brand: "Adidas", 
            model: "Essentials Sweatpants",
            size: "L",
            price: 299,
            color: "Grey",
            description: "Classic sweatpants with a tapered fit, ideal for workouts or lounging."},
        {id: 3,
            brand: "Levi's",
            model: "501 Original Jeans",
            size: "32/32",
            price: 699,
            color: "Blue",
            description: "Iconic straight-leg jeans with a classic fit, crafted from durable denim."},
        {id: 4,
            brand: "Zara",
            model: "Basic T-Shirt",
            size: "S",
            price: 99,
            color: "White",
            description: "A simple, everyday t-shirt made from breathable cotton for all-day comfort."},
        { id: 5,
            brand: "H&M",
            model: "Slim Fit Chinos",
            size: "M",
            price: 249,
            color: "Khaki",
            description: "Stylish chinos with a slim fit, suitable for both casual and semi-formal occasions."
          },
        {id: 6,
            brand: "The North Face",
            model: "Thermoball Eco Jacket",
            size: "L",
            price: 899,
            color: "Navy",
            description: "A lightweight, insulated jacket that provides warmth without bulk, made from recycled materials."}]
    );

    function handleAddToCart(cloth){
        onAddToCart(cloth);
        setClothOptions(clothOptions.filter(item => item.id !== cloth.id));
    };


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
                    <button type='button' onClick={handleAddToCart} style={ButtonStyle}>Add to cart</button>
                </div>
            ))
        }
            
        </div>
    )
}

export default ClothCard; 