import logo from "../assets/logo.svg";

function Logo() {
    return (
        <a href="#" className="header-logo-link">
            <img className="header-logo-img" src={logo} alt="Abstract Logo" />
            <span className="logo-text header-logo-text">| Help Center</span>
        </a>
    );
}

export default Logo;
