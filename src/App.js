// Import af CSS-fil for styling af applikationen
import './App.css'

// Import af nødvendige komponenter til routing
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import MainPage from './pages/MainPage';  // Hovedsiden af applikationen
import Pipper_version2 from './pages/Pipper_version2'; // Pipper projekt side
import KontaktBog from './pages/KontaktBog'  // Kontaktbog side
import ClothStore from './pages/ClothStore'  // Tøjbutik side

// App-komponenten der styrer routing og navigering i applikationen
function App() {
  return (
    // Router-komponent der gør det muligt at bruge navigering i applikationen
    <Router>
      <Routes>
        {/* Route for at vise MainPage når brugeren er på root ("/") */}
        <Route path="/" element={<MainPage/>}/>
        
        {/* Route for at vise Pipper_version2 komponenten når brugeren navigerer til "/pipper" */}
        <Route path="/pipper" element={<Pipper_version2 />}/>
        
        {/* Route for at vise KontaktBog komponenten når brugeren navigerer til "/kontaktbog" */}
        <Route path="/kontaktbog" element={<KontaktBog />}/>
        
        {/* Route for at vise ClothStore komponenten når brugeren navigerer til "/clothstore" */}
        <Route path="/clothstore" element={<ClothStore />}/>
      </Routes>
    </Router>
  )
};

// Eksporterer App-komponenten for at kunne bruge den i andre filer
export default App;

