// Import af nødvendige komponenter og biblioteker
import SidebarPipper from '../components/SideBarPipper'; // Sidebar-komponenten
import PipModal from '../components/PipModal'; // Modal-komponenten til oprettelse af "pips"
import React, { useState } from 'react'; // React og useState-hook til tilstandsstyring
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // FontAwesome for at bruge ikoner
import { faDove } from '@fortawesome/free-solid-svg-icons' // Importerer et ikon (dove) fra FontAwesome

// Hovedkomponenten
function Pipper_version2() {
    // Definerer en tilstand (pips) til at gemme en liste af "pips"
    const [pips, setPips] = useState([]);

    // Stil for hovedlayoutet, som organiserer sidebar og feed i en horisontal fleks-beholder
    const PipperStyle = {
        display: 'flex',
    };

    // Stil for sidebaren, som indeholder SidebarPipper-komponenten
    const SideBarstyle = {
        backgroundColor: '#fff', 
        color: '#000', 
        width: '20%', 
        marginRight: '10px', 
    }

    // Stil for feedsektionen, som viser "pips"
    const PipsFeedStyle = {
        width: '75%', 
    }

    // Returnerer JSX-strukturen for Pipper_version2-komponenten
    return (
        <div>
            {/* Header med en linje under for at adskille den fra hovedindholdet */}
            <h1 
                style={{ borderBottom: '5px solid black', paddingBottom: '12px', marginBottom: '0px', paddingLeft: '30px'}}
            >
                {/* Indsætter FontAwesome-ikon (dove) som en del af header-teksten */}
                <FontAwesomeIcon icon={faDove} 
                    style={{ padding: '0 12px' }}
                />
                Pipper
            </h1>
            
            {/* Container der bruger flex-styling til sidebar og feed */}
            <div style={PipperStyle}>
                {/* Sidebar-sektionen */}
                <div style={SideBarstyle}>
                    <SidebarPipper /> {/* Renders sidebar-komponenten */}
                </div>
                
                {/* Feed-sektionen, som indeholder overskriften og PipModal-komponenten */}
                <div style={PipsFeedStyle}>
                    <h2 
                        style={{ textAlign: 'center', border: 'solid black', borderRadius: '8px', padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '20px auto'}}
                    >
                        Pips Feed {/* Overskrift for feed-sektionen */}
                    </h2>
                    
                    {/* PipModal-komponenten, der bruges til at oprette nye "pips" */}
                    {/* PipModal får adgang til pips-tilstanden og kan opdatere denne via setPips */}
                    <PipModal pips={pips} setPips={setPips} style={{ width: '75%' }}/>
                </div>
            </div>
        </div>
    )
}

// Eksporterer Pipper_version2-komponenten, så den kan bruges i andre filer
export default Pipper_version2;
