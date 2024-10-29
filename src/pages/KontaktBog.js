import ContaktCard from '../components/ContactCard';

const KontaktBogStyle = {
    display: 'flex',
    maxWidth: '100vw',
    justifyContent: 'Center',
    flexWrap: 'Wrap'
}

function KontaktBog(){
    return (
        <div style={KontaktBogStyle}>
            <ContaktCard message="Person 1" />
            <ContaktCard message="Person 2"/>
            <ContaktCard message="Person 3"/>
            <ContaktCard message="Person 4"/>
            <ContaktCard message="Person 5"/>
        </div>
    )
}

export default KontaktBog