import { Link } from 'react-router-dom'

function MainPage(){
    return (
        <div>
        <h1>
            Velkommen til hovedsiden
        </h1>
        <button><Link to="/pipper">Pipper Projekt</Link></button>
        </div>
    )
}

export default MainPage