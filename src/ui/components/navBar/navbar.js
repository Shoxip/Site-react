import { Link } from 'react-router-dom';
import "./navbar.css";

const NavBar = () => {

    return (
    <nav className="navBar">
            <div className="NBliList">
                <li className="navLink"><Link to="/">Main</Link></li>
                <li className="navLink"><Link to="/projects">Projects</Link></li>
                <li className="navLink"><Link to="#">Resume</Link></li>
                <li className="navLink"><Link to="/about">About Me</Link></li>
            </div>
    </nav>
    );
};

export default NavBar;