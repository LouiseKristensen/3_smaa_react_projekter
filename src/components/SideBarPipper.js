import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faUser, faMessage, faBell, faGear, faPhone, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function SidebarPipper(){

    const sidebarStyle = {
        borderRadius: '8px',
        padding: '12px', 
        display: 'flex',
        width: '20%',
        height: '100vh',
        borderRight: 'solid',
        backgroundColor: 'lightGrey',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    const sideMenuStyle = {
        padding: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
        border: 'solid',
        borderRadius: '12px'
        }



    return (
        <div className="sidebar" style={sidebarStyle}>
            <div className="menu" style={sideMenuStyle}>
                    <li><FontAwesomeIcon icon={faHouse}/> Home</li>
                    <li><FontAwesomeIcon icon={faUser}/> Profile</li>
                    <li><FontAwesomeIcon icon={faMessage}/> Messages</li>
                    <li><FontAwesomeIcon icon={faBell}/> Notifications</li>
                    <li><FontAwesomeIcon icon={faGear}/> Settings</li>
                    <li><FontAwesomeIcon icon={faPhone}/> Support</li>
                    <li><FontAwesomeIcon icon={faRightFromBracket}/> Logout</li>
            </div>
        </div>
        )}


export default SidebarPipper;