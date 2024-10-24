// Link til bootsrap filer 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importer React
import React, { useState } from 'react';

// Importer komponenter
import Menu from './components/Menu.js';
import Modal from './components/Modal.js';
import Profile from './components/Profile.js';
import Feed from './components/Feed.js';
import WhoToFollow from './components/WhoToFollow.js';
import Subscribe from './components/Subscribe.js';
import Trends from './components/Trends.js';

// Importer stylesheet 
import './App.css';

// import logo from './logo.svg';

function App() {

  const [pips, setPips] = useState([]); // State til at holde pips
  const [showModal, setShowModal] = useState(false); // State til at styre modal visning

  // Funktion til at tilføje en pip
  const addPip = (username, message) => {
    const newPip = {
      id: pips.length + 1,
      username,
      message,
      avatar: 'https://api.dicebear.com/9.x/dylan/svg?seed=Aidan&radius=50&hairColor=000000&mood=confused,happy,hopeful,neutral,sad,superHappy',
    };
    setPips([...pips, newPip]); // Opdater pips med den nye pip
    setShowModal(false); // Luk modal'en
  };

  return (
    <> 
    <Menu/>
    {/* <Profile/> */}
    {/* <Modal/> */}

    {/* <Feed/> */}

    <div className="container">
      <Profile /> {/* Din profil komponent */}
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && <Modal onSubmit={addPip} onClose={() => setShowModal(false)} />}

      <Feed pips={pips} /> {/* Pass pips til Feed komponenten */}
    </div>

    <Subscribe/>
    <WhoToFollow/>
    <Trends/>
    
    </>
  );
}

export default Pipper_version2;
