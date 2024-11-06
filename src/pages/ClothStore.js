import ClothCard from "../components/ClothCard"; // Importerer ClothCard-komponenten til visning af tøjprodukter
import SidebarCloth from "../components/SideBarCloth"; // Importerer SidebarCloth-komponenten til visning af indkøbskurven
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importerer FontAwesome for ikoner
import { faShirt } from '@fortawesome/free-solid-svg-icons'; // Importerer skjorteikonet fra FontAwesome
import { useState } from "react"; // Importerer useState hook til at håndtere komponentens state

// Styling for placeringen af tøjkortene
const ClothCardLokationStyle = {
    width: '75%', 
}

// Styling for den overordnede layoutstruktur i ClothStore-komponenten
const ClothStoreStyle = {
    display: 'flex', 
    gap: '10px',     
    alignItems: 'flex-start', 
}

// Styling for sidebar, som indeholder indkøbskurven
const sidebarStyle = {
    display: 'flex',     
    width: '20%',         
    flexWrap: 'wrap',    
}

// `ClothStore` komponenten, der indeholder butikslayoutet og funktionalitet til at tilføje varer til indkøbskurven
function ClothStore() {
    // State for tøjmulighederne, initialiseret med et array af tøjprodukter
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

    // State for indkøbskurven, initialiseret som en tom array
    const [cartItems, setCartItems] = useState([]);

    // Funktion, der håndterer tilføjelse af varer til indkøbskurven
    function handleAddToCart(cloth) {
        setCartItems((prevCartItems) => [...prevCartItems, cloth]); // Tilføjer den valgte vare til cartItems
        setClothOptions(clothOptions.filter(item => item.id !== cloth.id)); // Fjerner den tilføjede vare fra clothOptions
    }

    return (
        <div>
            <h1 
                style={{ 
                    borderBottom: '5px solid black', 
                    paddingBottom: '15px', 
                    marginBottom: '0px', 
                    paddingLeft: '30px'
                }}>
                {/* Skjorteikon og titel */}
                <FontAwesomeIcon icon={faShirt} 
                    style={{ padding: '0 12px' }}
                />
                Tøjbutikken Unikt tøj
            </h1> 
            <div style={ClothStoreStyle}>
                {/* Sidebar, der viser indkøbskurven */}
                <div style={sidebarStyle} >
                    <SidebarCloth cartItems={cartItems} />
                </div>
                {/* Tøjkortene, der viser de tilgængelige varer */}
                <div style={ClothCardLokationStyle}>
                    {/* ClothCard komponenten, som viser alle tøjmulighederne */}
                    <ClothCard clothOptions={clothOptions} onAddToCart={handleAddToCart} />
                </div>
            </div>
        </div>
    );
}

export default ClothStore;
