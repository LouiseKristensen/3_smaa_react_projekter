import { Link } from 'react-router-dom'

function MainPage(){

    const mainpageStyling = {
        textAlign: 'center',
        padding: '16px',
        margin: '16px'

    }

    const buttonStyling ={
        borderRadius: '12px',
        padding: '12px',
        margin: '12px',
        backgroundColor: '#8ced47',
        color: 'white'
    }

    return (
        <div style={mainpageStyling}>
        <h1>
            Velkommen til hovedsiden
        </h1>
        <button style={buttonStyling}>
            <Link to="/pipper" style={{textDecoration: 'none'}}>Pipper Projekt</Link>
        </button>
        <button style={buttonStyling}>
            <Link to="/kontaktbog" style={{textDecoration: 'none'}}>Kontaktbog Projekt</Link>
        </button>
        <button style={buttonStyling}>
            <Link to="/clothstore" style={{textDecoration:'none'}}>Tøjbutik Projekt</Link>
        </button>
        </div>
    )
}

export default MainPage