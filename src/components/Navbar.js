import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = props => {
    let active = window.location.pathname;
    let activeLinkValue = -1;
    switch (active) {
        case "/":
            activeLinkValue = 0;
            break;
        case "/about-us":
            activeLinkValue = 1;
            break;
        case "/products":
            activeLinkValue = 2;
            break;
        case "/careers":
            activeLinkValue = 3;
            break;
        case "/contact-us":
            activeLinkValue = 4;
            break;
        default:
            break;
    }

    const [activeLink, setActiveLink] = useState(activeLinkValue);
    const [contextOpen, setContextOpen] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", contextListener);
        window.addEventListener("click", contextListener);
        return () => {
            window.removeEventListener("scroll", contextListener);
            window.removeEventListener("click", contextListener);
        }
    },[]);

    const contextListener = () => {
        setContextOpen(false);
    }

    const navButtons = <>
        <Link to="/" onClick={() => {setActiveLink(0)}}><button className={"nav-button" + ((activeLink === 0) ? " active-button" : "")}>Home</button></Link>
        <Link to="/about-us" onClick={() => {setActiveLink(1)}}><button className={"nav-button" + ((activeLink === 1) ? " active-button" : "")}>About Us</button></Link>
        <Link to="/products" onClick={() => {setActiveLink(2)}}><button className={"nav-button" + ((activeLink === 2) ? " active-button" : "")}>Products</button></Link>
        <Link to="/careers" onClick={() => {setActiveLink(3)}}><button className={"nav-button" + ((activeLink === 3) ? " active-button" : "")}>Careers</button></Link>
        <Link to="/contact-us" onClick={() => {setActiveLink(4)}}><button className={"nav-button" + ((activeLink === 4) ? " active-button" : "")}>Contact Us</button></Link>
    </>

    return <nav id="navbar-container">
        <Link to="/">
            <div id="nav-logo">
                <div>{"Saddle Oak"}</div>
                <div>SOFTWARE</div>
            </div>
        </Link>
        <div id="button-container">
            {navButtons}
        </div>
        <div id="context-menu">
            <svg onClick={(e) => {setContextOpen(!contextOpen); e.stopPropagation()}} onMouseDown={(e) => {e.preventDefault();}} version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="25.000000pt" height="25.000000pt" viewBox="0 0 300.000000 300.000000"
                    preserveAspectRatio="xMidYMid meet" className={contextOpen ? "active-context" : ""}>
                <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M200 2000 l0 -100 1300 0 1300 0 0 100 0 100 -1300 0 -1300 0 0 -100z"/>
                <path d="M200 1500 l0 -100 1300 0 1300 0 0 100 0 100 -1300 0 -1300 0 0 -100z"/>
                <path d="M200 1000 l0 -100 1300 0 1300 0 0 100 0 100 -1300 0 -1300 0 0 -100z"/>
                </g>
            </svg>
            {contextOpen && <div id="context-dropdown">
                {navButtons}
            </div>}
        </div>
    </nav>
}

export default Navbar;