import './App.css'
// Importer pages 
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Pipper_version2 from './pages/Pipper_version2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/pipper" element={<Pipper_version2 />}/>
      </Routes>
    </Router>
  )
  };


export default App;
