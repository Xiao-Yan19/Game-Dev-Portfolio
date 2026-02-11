import { Link } from "react-router-dom";
import "./navBar.css"

function NavBar(){

    return(
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/"> Abhi-Shake</Link>
            </div>

            <div className="nav-links">
            <Link to="/" >Home</Link>
            <Link to="/about" >About Me</Link>
            <Link to="/projects" >Projects</Link>
            <Link to="/skills" >Skills</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default NavBar;