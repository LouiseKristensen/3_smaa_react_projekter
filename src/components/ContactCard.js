const ConctactCardStyle = {
    margin: '16px',
    border: 'Solid',
    padding: '12px',
    backgroundColor: '#f9f9f9',
}

function ContactCard(contact){
    return (
        <div style={ConctactCardStyle}>
            <h2>PErson</h2>
            <li>Fornavn: {contact.firstname}</li>
            <li>Efternavn: {contact.lastname}</li>
            <li>Email {contact.email}</li>
            <li>Telefon {contact.phone}</li>
            <li>Firma {contact.company}</li>
            <li>Stilling {contact.position}</li>
        </div>
    )
}

export default ContactCard