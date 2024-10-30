import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faUser, faMessage, faBell, faGear, faPhone, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'

function SidebarPipper(){

    const sidebarStyle = {
        borderRadius: '8px',
        padding: '12px', 
        display: 'flex',
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
        borderRadius: '12px',
        }

    const iconStyle = {
        padding: '8px 0',
    }



    return (
        <div className="sidebar" style={sidebarStyle}>
            <div className="menu" style={sideMenuStyle}>
                    <li style={iconStyle}><FontAwesomeIcon icon={faHouse}/> Home</li>
                    <li style={iconStyle}><FontAwesomeIcon icon={faUser}/> Profile</li>
                    <li style={iconStyle}><FontAwesomeIcon icon={faMessage}/> Messages</li>
                    <li style={iconStyle}><FontAwesomeIcon icon={faBell}/> Notifications</li>
                    <li style={iconStyle}><FontAwesomeIcon icon={faGear}/> Settings</li>
                    <li style={iconStyle}><FontAwesomeIcon icon={faPhone}/> Support</li>
                    <li style={iconStyle}><FontAwesomeIcon icon={faRightFromBracket}/> Logout</li>
            </div>
        </div>
        )}


export default SidebarPipper;