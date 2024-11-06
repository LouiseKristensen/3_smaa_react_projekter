// Import af Link-komponenten fra react-router-dom for at navigere mellem sider
import { Link } from 'react-router-dom'

// Definerer MainPage-komponenten
function MainPage() {

    // Styling til containeren for MainPage
    const mainpageStyling = {
        textAlign: 'center',
        padding: '16px',
        margin: '16px'
    }

    // Styling til knapperne
    const buttonStyling = {
        borderRadius: '12px',
        padding: '12px',
        margin: '12px',
        backgroundColor: '#8ced47', // Grøn baggrund
        color: 'white' // Hvid tekstfarve
    }

    // Returnerer JSX-strukturen, som definerer layoutet og indholdet af hovedsiden
    return (
        <div style={mainpageStyling}>
            {/* Overskrift */}
            <h1>
                Velkommen til hovedsiden
            </h1>

            {/* Knappen, der linker til Pipper-projektet */}
            <button style={buttonStyling}>
                <Link to="/pipper" style={{textDecoration: 'none'}}>Pipper Projekt</Link>
            </button>

            {/* Knappen, der linker til Kontaktbog-projektet */}
            <button style={buttonStyling}>
                <Link to="/kontaktbog" style={{textDecoration: 'none'}}>Kontaktbog Projekt</Link>
            </button>

            {/* Knappen, der linker til Tøjbutik-projektet */}
            <button style={buttonStyling}>
                <Link to="/clothstore" style={{textDecoration: 'none'}}>Tøjbutik Projekt</Link>
            </button>
        </div>
    )
}

// Eksporterer MainPage-komponenten, så den kan bruges i andre filer
export default MainPage
