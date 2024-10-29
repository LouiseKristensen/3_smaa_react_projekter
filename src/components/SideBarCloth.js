import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function SidebarCloth(){
    
    const sideMenuStyle = {
        padding: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
        borderRadius: '12px'
        }

        const sidebarStyle = {
            borderRadius: '8px',
            padding: '12px', 
            display: 'flex',
            height: '100vh',
            borderRight: 'solid',
            backgroundColor: 'lightGrey',
            justifyContent: 'center',
        }

    return (
        <div className="sidebar" style={sidebarStyle}>
            <div className="menu" style={sideMenuStyle}>
                    <li><FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '24px', marginTop: '50px' }}/></li>
            </div>
        </div>
    )
}

export default SidebarCloth; 