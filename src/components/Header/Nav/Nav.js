import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import { ReactComponent as Netflix } from "../../../assists/Netflix_2015_logo.svg";
import { ReactComponent as Categories } from "../../../assists/3017931_categories_class_division_group_list_icon.svg";
import { createPortal } from "react-dom";

export const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Modal = (props) => {
  return (
    <div className={`${classes.modaloverlay} ${props.className}`}>
      {props.children}
    </div>
  );
};

const Nav = () => {
  const [showCategories, setshowCategories] = useState(false);

  const showCategoriesHandler = () => {
    setshowCategories(true);
  };

  const hideCategoriesHandler = () => {
    setshowCategories(false);
  };

  const backDrop = document.getElementById("backdrop");
  const overlay = document.getElementById("overlay");

  return (
    <Fragment>
      <nav className={classes.nav}>
        <div className={classes.firstNav}>
          <Link className={classes.logo} to="/Home">
            <Netflix className={classes.img} />
          </Link>
        </div>
        <div className={classes.lastNav}>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <NavLink to="/Home" activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink to="/Movies" activeClassName={classes.active}>
                Movies
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink to="/tv" activeClassName={classes.active}>
                TV Series
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink to="/Actors" activeClassName={classes.active}>
                Actors
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.categories}>
          <Categories onClick={showCategoriesHandler} />
          {showCategories && (
            <>
              {<BackDrop onClick={hideCategoriesHandler} />}
              {
                <Modal>
                  <ul className={classes.ul}>
                    <li className={classes.li}>
                      <NavLink
                        onClick={hideCategoriesHandler}
                        to="/Home"
                        activeClassName={classes.active}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className={classes.li}>
                      <NavLink
                        onClick={hideCategoriesHandler}
                        to="/Movies"
                        activeClassName={classes.active}
                      >
                        Movies
                      </NavLink>
                    </li>
                    <li className={classes.li}>
                      <NavLink
                        onClick={hideCategoriesHandler}
                        to="/tv"
                        activeClassName={classes.active}
                      >
                        TV Series
                      </NavLink>
                    </li>
                    <li className={classes.li}>
                      <NavLink
                        onClick={hideCategoriesHandler}
                        to="/Actors"
                        activeClassName={classes.active}
                      >
                        Actors
                      </NavLink>
                    </li>
                  </ul>
                </Modal>
              }
            </>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
