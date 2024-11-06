// Stil for selve kontaktkortet
const ConctactCardStyle = {
    margin: '16px',             
    border: 'Solid',             
    borderRadius: '8px',        
    padding: '12px',            
    backgroundColor: '#f9f9f9',  
    width: '75%',                
};

// Stil for placeringen af kontaktkortet
const ConctactCardPlacementStyle = {
    display: 'flex',                 
    justifyContent: 'center',        
    padding: '10px 0',               
};

// Kontaktkort-komponent, som modtager `data`-prop
const ContactCard = ({ data }) => {
    return (
        <div style={ConctactCardPlacementStyle}> {/* Ydre div til centrering */}
            <div style={ConctactCardStyle}>       {/* Indre div med kortets stil */}
                
                {/* Viser brugerens for- og efternavn som overskrift */}
                <h2>{data.firstName} {data.lastName}</h2>
                
                {/* Liste over kontaktinformation */}
                <ul style={{ listStyle: 'none', padding: '0' }}> 
                    <li style={{padding: '10px 0'}}><strong>Email:</strong> {data.email}</li>
                    <li style={{padding: '10px 0'}}><strong>Telefon:</strong> {data.phone}</li>
                    <li style={{padding: '10px 0'}}><strong>Firma:</strong> {data.firm}</li>
                    <li style={{padding: '10px 0'}}><strong>Stilling:</strong> {data.position}</li>
                </ul>
            </div>
        </div>
    );
}

// Eksporterer ContactCard-komponenten, så den kan bruges i andre filer
export default ContactCard;