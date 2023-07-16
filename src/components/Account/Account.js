import { Fragment, useState } from "react"
import classes from './Account.module.css'
import { Link, Route } from "react-router-dom";
import ChangePassword from "./changePassword/ChangePassword";
import Logout from "./Logout/Logout";
import Button from "../../UI/Button/Button";


const Account = () => {

    const [showLogout, setShowLogout] = useState(false);
    const [showChange, setShowChange] = useState(false);



    const showLogoutHandler = () =>{
        setShowLogout(true);
    }
    const hideLogoutHandler = () => {
        setShowLogout(false);
    }

    const showChangeHandler = () =>{
        setShowChange(true);
    }
    const hideChangeHandler = () => {
        setShowChange(false);
    }



    return (
        <Fragment>
            <p>My Profile</p>
            <div className={classes.account}>
                <Route path='/Account' exact>
                    <Button
                        className={classes.change}
                        onClick = {showChangeHandler}
                    >
                        change Password
                    </Button>
                    <Button
                        className={classes.logout}
                        onClick = {showLogoutHandler}
                    >
                        Logout
                    </Button>
                </Route>
                    {showChange && <ChangePassword onHide = {hideChangeHandler} />}
                    {showLogout && <Logout onHide = {hideLogoutHandler}/>}


                


            </div>
        </Fragment>
    )

}


export default Account;


