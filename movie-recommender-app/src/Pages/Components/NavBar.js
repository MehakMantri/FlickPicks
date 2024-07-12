// NavBar Component
import { Link } from "react-router-dom";
import "./styles/NavBarStyles.css";
import logo from "./images/logo.png";

const NavBar = ({ isHome }) => {
    const gitRepoLink =
        "https://github.com/MehakMantri/FlickPicks";
    return (
        <div className="container header">
            <Link to="/ ">
                <img src={logo} className="logo" alt="logo" />
            </Link>
            {/* if isHome then the button is the github button else its the home button*/}
            {isHome ? (
                <a href="/" className="header-btn1 bouncy">
                    <i className="fas fa-home"></i> Home
                </a>
            ) : (
                <a
                    href={gitRepoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="header-btn1 bouncy"
                >
                    <i className="fa-brands fa-github"></i> Github
                </a>
            )}
        </div>
    );
};

export default NavBar;
