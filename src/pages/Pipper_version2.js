// Import af komponenter
import SidebarPipper from '../components/SideBarPipper';
import PipModal from '../components/PipModal';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDove} from '@fortawesome/free-solid-svg-icons'


function Pipper_version2() {
    const [pips, setPips] = useState([]);


    const PipperStyle = {
        display: 'flex',
    };    
    
    const SideBarstyle = {
        backgroundColor: '#fff',
        color: '#000',
        width: '20%',
        marginRight: '10px',
    }

    const PipsFeedStyle = {
        width: '75%',
    }
  

  return (
    <div>
        <h1 
            style={{ borderBottom: '5px solid black', paddingBottom: '12px', marginBottom: '0px', paddingLeft: '30px'}}>
        <FontAwesomeIcon icon={faDove} 
            style={{ padding: '0 12px' }}
        />
        Pipper</h1> 
    <div style={PipperStyle}>
    <div style={SideBarstyle}>
    <SidebarPipper/>
    </div>
    <div style={PipsFeedStyle}>
        <h2 
            style={{ textAlign: 'center', border: 'solid black', borderRadius: '8px', padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '20px auto'}}
        >Pips Feed</h2>
        <PipModal pips={pips} setPips={setPips} style={{ width: '75%' }}/>
    </div>
    </div>
    </div>
  )
}


export default Pipper_version2;
