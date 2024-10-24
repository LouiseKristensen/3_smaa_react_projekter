// Importer React
import React, { useState } from 'react';

// Import af komponenter
import SidebarPipper from '../components/SideBarPipper';


function Pipper_version2() {

  const Pipperstyle = {
    backgroundColor: '#fff',
    color: '#000'
  }
  return (
    <div style={Pipperstyle}>
    <SidebarPipper/>
    </div>
  )
}


export default Pipper_version2;
