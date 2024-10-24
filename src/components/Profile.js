
function Profile() {
  return (
    <div className="profile">
      <img
        className="profilepicture"
        src="https://api.dicebear.com/9.x/dylan/svg?seed=Aidan&radius=50&hairColor=000000&mood=confused,happy,hopeful,neutral,sad,superHappy"
        alt="Profile avatar"
      />
      <div>
        <p><strong>Sarah Rasmussen</strong></p> {/* Hardkodet navn */}
        <p className="username">@sarahjhtras</p> {/* Hardkodet brugernavn */}
      </div>
      <p>...</p>
    </div>
  );
}

export default Profile;
