// Importer Font Awesome ikoner
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Importer det specifikke ikon

function WhoToFollow() {
  return (
    <div className="sub">
      <h4>Who to follow</h4>

      {/* Første profil */}
      <div className="follow-profil">
        <img className="profilepicture" src="https://api.dicebear.com/9.x/dylan/svg?seed=Eden&radius=50" alt="avatar" />
        <div>
          <p>rosi</p>
          <p>@missrosi</p>
        </div>
        <a href="#"><FontAwesomeIcon icon={faUserPlus} /></a> {/* Bruger FontAwesomeIcon komponenten */}
      </div>

      {/* Anden profil */}
      <div className="follow-profil">
        <img className="profilepicture" src="https://api.dicebear.com/9.x/dylan/svg?seed=Maria&radius=50" alt="avatar" />
        <div>
          <p>jaemin</p>
          <p>@ja4min_</p>
        </div>
        <a href="#"><FontAwesomeIcon icon={faUserPlus} /></a> {/* Bruger FontAwesomeIcon komponenten */}
      </div>

      {/* Tredje profil */}
      <div className="follow-profil">
        <img className="profilepicture" src="https://api.dicebear.com/9.x/dylan/svg?seed=Amaya&radius=50" alt="avatar" />
        <div>
          <p>murmrr</p>
          <p>@_murmrr</p>
        </div>
        <a href="#"><FontAwesomeIcon icon={faUserPlus} /></a> {/* Bruger FontAwesomeIcon komponenten */}
      </div>
    </div>
  );
}

export default WhoToFollow;
