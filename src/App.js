import './App.css'
// Importer pages 
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Pipper_version2 from './pages/Pipper_version2';
import KontaktBog from './pages/KontaktBog'
import ClothStore from './pages/ClothStore'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/pipper" element={<Pipper_version2 />}/>
        <Route path="/kontaktbog" element={<KontaktBog />}/>
        <Route path="/clothstore" element={<ClothStore />}/>
      </Routes>
    </Router>
  )
  };


export default App;
