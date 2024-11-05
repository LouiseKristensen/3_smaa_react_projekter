function Feed({ pips }) {

  return (
    <div style={{ marginTop: '20px', gap: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {pips.map((pip) => (
        <div key={pip.id} style={{
          border: 'solid black',
          borderRadius: '8px',
          padding: '15px',
          width: '75%',
          backgroundColor: '#fff',
          marginBottom: '15px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: 'black' }}>{pip.username}</h3>
          <p style={{ fontSize: '14px', color: '#555' }}>{pip.message}</p>
        </div>
    ))}
    </div>
  );
}

export default Feed;
