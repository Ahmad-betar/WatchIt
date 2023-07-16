import { Fragment } from "react"
import { Link, NavLink } from "react-router-dom";
import classes from './Nav.module.css'
import { ReactComponent as Netflix } from '../../../assists/Netflix_2015_logo.svg';


const Nav = () => {





    return (
        <Fragment>
            <nav className={classes.nav}>
                <div className={classes.firstNav}>
                    <Link
                        className={classes.logo}
                        to='/Home'
                    >
                        <Netflix
                            className={classes.img}
                        />
                    </Link>
                </div>
                <div className={classes.leftNav}>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <NavLink
                                to='/Home'
                                activeClassName={classes.active}>
                                Home
                            </NavLink>
                        </li>
                        <li className={classes.li}>
                            <NavLink
                                to='/Movies'
                                activeClassName={classes.active}>
                                Movies
                            </NavLink>
                        </li>
                        <li className={classes.li}>
                            <NavLink
                                to='/tv'
                                activeClassName={classes.active}>
                                TV Series
                            </NavLink>
                        </li>
                        <li className={classes.li}>
                            <NavLink
                                to='/Actors'
                                activeClassName={classes.active}>
                                Actors
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className={classes.rightNav}>
                    <div className={classes.pic}>Pic</div>

                </div>



            </nav>
        </Fragment>
    )
}


export default Nav;




// import React, { Fragment } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ReactComponent as Netflix } from "../../../assists/Netflix_2015_logo.svg";
// import './Nav.css';

// const Nav = () => {
//   return (
//     <Fragment>
//       <nav className="nav">
//         <div className="firstNav">
//           <Link className="logo" to="./Home">
//             <Netflix className="img" />
//           </Link>
//         </div>
//         <div className="leftNav">
//           <ul className="ul">
//             <li className="li">
//               <NavLink to="/Home" activeClassName="active">
//                 Home
//               </NavLink>
//             </li>
//             <li className="li">
//               <NavLink to="/Movies" activeClassName="active">
//                 Movies
//               </NavLink>
//             </li>
//             <li className="li">
//               <NavLink to="/tv_series" activeClassName="active">
//                 TV Series
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         <div className="rightNav">
//           {/* <Search /> */}
//           <div className="pic">Pic</div>
//         </div>
//       </nav>
//     </Fragment>
//   );
// };

// export default Nav;
