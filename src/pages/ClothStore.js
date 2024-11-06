import ClothCard from "../components/ClothCard"
import SidebarCloth from "../components/SideBarCloth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShirt} from '@fortawesome/free-solid-svg-icons'

const ClothCardLokationStyle = {
    width: '75%',
}

const ClothStoreStyle = {
    display: 'flex',
    gap: '10px',          
    alignItems: 'flex-start',
}

const sidebarStyle = {
    width: '20%',
}

function ClothStore() {
    return (
        <div>
            <h1 style={{ borderBottom: '5px solid black', paddingBottom: '15px', marginBottom: '0px', paddingLeft: '30px'}}>
        <FontAwesomeIcon icon={faShirt} 
            style={{ padding: '0 12px' }}
        />
        Tøjbutikken Unikt tøj</h1> 
        <div style={ClothStoreStyle}>
            <div style={sidebarStyle} >
                <SidebarCloth/>
            </div>
            <div style={ClothCardLokationStyle}>
            <ClothCard/>
            </div>
        </div>
        </div>
    )
}

export default ClothStore