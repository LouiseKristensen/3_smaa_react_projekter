import { Link } from 'react-router-dom';

function MainPageButton(props) {
    return (
        <div>
            <button>
                <Link>{props.message}</Link>
            </button>
        </div>
    )
}

export default MainPageButton