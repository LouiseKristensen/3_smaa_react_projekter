import ContactManager from '../components/ContactManager';

const KontaktBogStyle = {
    display: 'flex',
    maxWidth: '100vw',
    justifyContent: 'Center',
    flexWrap: 'Wrap'
}

function KontaktBog(){
    return (
        <div>
        <div style={KontaktBogStyle}>
            <ContactManager/>
        </div>
        </div>
    )
}

export default KontaktBog