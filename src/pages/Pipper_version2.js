// Importer React
import React, { useState } from 'react';

// Import af komponenter
import SidebarPipper from '../components/SideBarPipper';
import Feed from '../components/Feed';
import PipModal from '../components/PipModal';
import Pip from '../components/Pip';


function Pipper_version2() {

  const Pipperstyle = {
    backgroundColor: '#fff',
    color: '#000'
  }
  return (
    <div>
    <div style={Pipperstyle}>
    <SidebarPipper/>
    </div>
    <Feed/>
    </div>
  )
}


export default Pipper_version2;
