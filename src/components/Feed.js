// Feed-komponent, som modtager en prop `pips`, der er en liste af objekter
function Feed({ pips }) {

  return (
    // Ydre container-div for hele feedet med styling for layout og mellemrum
    <div style={{ 
      marginTop: '20px',     
      gap: '10px',          
      display: 'flex',       
      flexDirection: 'column', 
      alignItems: 'center'
    }}>  
      
      {/* Mapper gennem hvert pip i `pips`-listen og skaber en individuel pip-komponent */}
      {pips.map((pip) => (
        <div key={pip.id} style={{
          border: 'solid black',      
          borderRadius: '8px',        
          padding: '15px',            
          width: '75%',               
          backgroundColor: '#fff',    
          marginBottom: '15px'         
        }}>
          
          {/* Viser brugernavnet for hver pip med tekst-styling */}
          <h3 style={{ 
            margin: '0 0 10px 0',     
            fontSize: '16px',          
            color: 'black'           
          }}>
            {pip.username}
          </h3>
          
          {/* Viser selve pip-beskeden med en mindre skrifttype */}
          <p style={{ 
            fontSize: '14px',         
            color: '#555'            
          }}>
            {pip.message}
          </p>
          
        </div>
      ))}
    </div>
  );
}

// Eksporterer Feed-komponenten, så den kan bruges i andre filer
export default Feed;

