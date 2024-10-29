const ConctactCardStyle = {
    margin: '16px',
    border: 'Solid',
    padding: '12px',
}

function ContactCard(props){
    return (
        <div style={ConctactCardStyle}>
            <h2>{props.message}</h2>
            <li>Fornavn:</li>
            <li>Efternavn</li>
            <li>Email</li>
            <li>Telefon</li>
            <li>Firma</li>
            <li>Stilling</li>
        </div>
    )
}

export default ContactCard