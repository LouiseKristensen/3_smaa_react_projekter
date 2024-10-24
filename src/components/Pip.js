import React from 'react';

function Pip({ avatar, username, message }) {
  return (
    <div className="pip-message">
      <img className="profilepictureFeed" src={avatar} alt={username} />
      <div>
        <div className="username-display"><strong>{username}</strong></div>
        <div className="message-display">{message}</div>
      </div>
    </div>
  );
}

export default Pip;
