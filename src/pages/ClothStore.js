import ClothCard from "../components/ClothCard"
import SidebarCloth from "../components/SideBarCloth"

const ClothCardLokationStyle = {
    width: '75%',
}

const ClothStoreStyle = {
    display: 'flex',
    gap: '10px',          
    alignItems: 'flex-start',
    padding: '20px',
};

const sidebarStyle = {
    width: '20%',
}

function ClothStore() {
    return (
        <div style={ClothStoreStyle}>
            <div style={sidebarStyle} >
                <SidebarCloth/>
            </div>
            <div style={ClothCardLokationStyle}>
            <h1 style={{ textAlign: 'center' }}>Tøjbutikken Unikt tøj</h1>
            <ClothCard/>
            </div>
        </div>
    )
}

export default ClothStore