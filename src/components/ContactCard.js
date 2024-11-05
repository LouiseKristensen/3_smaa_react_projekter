const ConctactCardStyle = {
    margin: '16px',
    border: 'Solid',
    padding: '12px',
    backgroundColor: '#f9f9f9',
}

const ContactCard = ({ data }) => {
    return (
        <div style={ConctactCardStyle}>
            <h2>Person</h2>
            <li>Fornavn: {data.firstName}</li>
            <li>Efternavn: {data.lastName}</li>
            <li>Email: {data.email}</li>
            <li>Telefon: {data.phone}</li>
            <li>Firma: {data.firm}</li>
            <li>Stilling: {data.position}</li>
        </div>
    )
}

export default ContactCard