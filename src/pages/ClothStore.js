import ClothCard from "../components/ClothCard"
import SidebarCloth from "../components/SideBarCloth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShirt} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const ClothCardLokationStyle = {
    width: '75%',
}

const ClothStoreStyle = {
    display: 'flex',
    gap: '10px',          
    alignItems: 'flex-start',
}

const sidebarStyle = {
    display: 'flex',
    width: '20%',
    flexWrap: 'wrap',
}

function ClothStore() {
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
        
    const [cartItems, setCartItems] = useState([]);

    function handleAddToCart(cloth) {
        setCartItems((prevCartItems) => [...prevCartItems, cloth]);
        setClothOptions(clothOptions.filter(item => item.id !== cloth.id))
    ;
    }

    return (
        <div>
            <h1 style={{ borderBottom: '5px solid black', paddingBottom: '15px', marginBottom: '0px', paddingLeft: '30px'}}>
        <FontAwesomeIcon icon={faShirt} 
            style={{ padding: '0 12px' }}
        />
        Tøjbutikken Unikt tøj</h1> 
        <div style={ClothStoreStyle}>
            <div style={sidebarStyle} >
                <SidebarCloth cartItems={cartItems} />
            </div>
            <div style={ClothCardLokationStyle}>
            {/* <h1 style={{ textAlign: 'center' }}>Tøjbutikken Unikt tøj</h1> */}
            <ClothCard clothOptions={clothOptions} onAddToCart={handleAddToCart} />
            </div>
        </div>
        </div>
    )}


export default ClothStore