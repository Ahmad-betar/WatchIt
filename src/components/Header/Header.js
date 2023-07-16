import { Fragment, useEffect, useState } from "react";
import classes from './Header.module.css';
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";



const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);

    }

    return (
        <Fragment>
            <header
                className={
                    `${classes.header} 
                    ${scrolled ? classes.scrolled : ''}`}
            >
                <Nav />
            </header>

        </Fragment>
    )
}

export default Header;

