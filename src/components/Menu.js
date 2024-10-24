// Importer Font Awesome ikoner
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faBell, faEnvelope, faList, faBriefcase, faGlobe, faBoltLightning, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import { faEarlybirds, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Modal from './Modal.js'; // importer modal komponenten (åben)

function Menu() {
    return (
        <div className="menu-items">
            <FontAwesomeIcon icon={faEarlybirds} />
            <br />
            <a href="#"><FontAwesomeIcon icon={faHouse} /> Home</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /> Explore</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faBell} /> Notifications</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faEnvelope} /> Messages</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faList} /> Lists</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faBookmark} /> Bookmarks</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faBriefcase} /> Jobs</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faGlobe} /> Communities</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faXTwitter} /> Premium</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faBoltLightning} /> Verified Orgs</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faUser} /> Profile</a>
            <br />
            <a href="#"><FontAwesomeIcon icon={faCircleInfo} /> More</a>
            <br />

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Pip 
            </button>

            {/* Modal komponent */}
            <Modal />
        </div>
    );
}

export default Menu;