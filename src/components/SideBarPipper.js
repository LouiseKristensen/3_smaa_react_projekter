// Importerer FontAwesomeIcon-komponenten til at bruge ikoner fra Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importerer specifikke ikoner fra Font Awesome's solid-pakke
import { faHouse, faUser, faMessage, faBell, faGear, faPhone, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// Definerer SidebarPipper-komponenten, som er en sidebar-menu
function SidebarPipper(){

    // Stil for selve sidebar-containeren
    const sidebarStyle = {
        borderRadius: '8px',               
        padding: '12px',                   
        display: 'flex',                   
        height: '100vh',                   
        borderRight: 'solid',             
        backgroundColor: 'lightGrey',      
        justifyContent: 'center',          
        alignItems: 'center'               
    };
    
    // Stil for menu-listen i sidebaren
    const sideMenuStyle = {
        padding: '16px',                   
        justifyContent: 'center',          
        alignItems: 'center',             
        listStyle: 'none',                
        border: 'solid',                  
        borderRadius: '12px'              
    };

    // Stil for hvert ikon-element i menuen
    const iconStyle = {
        padding: '8px 0',                  
    };

    // Returnerer JSX til at bygge sidebar-layoutet
    return (
        <div className="sidebar" style={sidebarStyle}>
            <div className="menu" style={sideMenuStyle}>
                
                {/* Liste over menu-elementer, hver med et ikon og tekst */}
                <li style={iconStyle}><FontAwesomeIcon icon={faHouse}/> Home</li>
                <li style={iconStyle}><FontAwesomeIcon icon={faUser}/> Profile</li>
                <li style={iconStyle}><FontAwesomeIcon icon={faMessage}/> Messages</li>
                <li style={iconStyle}><FontAwesomeIcon icon={faBell}/> Notifications</li>
                <li style={iconStyle}><FontAwesomeIcon icon={faGear}/> Settings</li>
                <li style={iconStyle}><FontAwesomeIcon icon={faPhone}/> Support</li>
                <li style={iconStyle}><FontAwesomeIcon icon={faRightFromBracket}/> Logout</li>
            </div>
        </div>
    );
}

// Eksporterer SidebarPipper-komponenten, så den kan bruges i andre filer
export default SidebarPipper;
