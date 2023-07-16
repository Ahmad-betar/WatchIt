
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';


const Footer = () => {






    return (
        <footer className={classes.footer}>
            <div className={classes.shadow}>

                <h1 className={classes.netflix}>NETFLIX</h1>
                <section className={classes.section}>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <Link to={'/Home'}>
                                Home
                            </Link>
                        </li>
                        <li className={classes.li}>
                            <Link to={'/Home'}>
                                contact us
                            </Link>
                        </li>
                        <li className={classes.li}>
                            <Link to={'/Home'}>
                                Term of services
                            </Link>
                        </li>
                        <li className={classes.li}>
                            <Link to={'/Home'}>
                                About us
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
        </footer>


    )
}


export default Footer;