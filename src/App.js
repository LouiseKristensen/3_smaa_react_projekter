// Importer pages 
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Pipper_version2 from './pages/Pipper_version2';
import MainPage from './pages/MainPage';
import MainpageButton

// Importer stylesheet 
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Pipper_version2" element={<Pipper_version2 />}/>
      </Routes>
    </Router>
  )
  };


export default App;
