
function Pip({username, message }) {
  return (
    <div className="pip-message">
        <div className="username-display"><strong>{username}</strong></div>
        <div className="message-display">{message}</div>
    </div>
  );
}

export default Pip;
