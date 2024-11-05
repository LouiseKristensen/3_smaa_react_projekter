import { width } from "@fortawesome/free-solid-svg-icons/fa0"

const ConctactCardStyle = {
    margin: '16px',
    border: 'Solid',
    borderRadius: '8px',
    padding: '12px',
    backgroundColor: '#f9f9f9',
    width: '75%',
}

const ConctactCardPlacementStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
}

const ContactCard = ({ data }) => {
    return (
        <div style={ConctactCardPlacementStyle}>
        <div style={ConctactCardStyle}>
            {/* <h2>Person</h2> */}
            <h2>{data.firstName} {data.lastName}</h2>
            {/* <li>Fornavn: {data.firstName}</li>
            <li>Efternavn: {data.lastName}</li> */}
            <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{padding: '10px 0'}}><strong>Email:</strong> {data.email}</li>
            <li style={{padding: '10px 0'}}><strong>Telefon:</strong> {data.phone}</li>
            <li style={{padding: '10px 0'}}><strong>Firma:</strong> {data.firm}</li>
            <li style={{padding: '10px 0'}}><strong>Stilling:</strong> {data.position}</li>
            </ul>
        </div>
        </div>
    )
}

export default ContactCard