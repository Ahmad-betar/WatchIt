import { Fragment, useState } from "react";
import classes from './Logout.module.css';
import Button from "../../../UI/Button/Button";
import { BackDrop, ModalOverlay } from "../../../UI/Modal/Modal";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/Auth-slice";
import { useHistory } from "react-router-dom";
import { createPortal } from "react-dom";
import Card from "../../../UI/Card/card";


const Logout = (props) => {


    const dispatch = useDispatch();

    const history = useHistory();

    const logoutHandler = () => {
        dispatch(authActions.setLogout());
        props.onHide();
        history.push('/Home');


    }
    const hideLogoutHandler = () => {
        props.onHide();
    }





    const overlay = document.getElementById('overlay');
    const backdrop = document.getElementById('backdrop');

    return (
        <Fragment>
            {createPortal(
                <BackDrop onClick={hideLogoutHandler}
                />,
                backdrop)
            }
            {createPortal(
                <Card className={classes.logout}>
                    <p className={classes.sure}>Are you sure you want to logout ?</p>
                    <div className={classes.form}>
                        <Button
                            className={classes.button}
                            onClick={logoutHandler}>
                            Yes
                        </Button>
                        <Button
                            className={classes.button}
                            onClick={props.onHide}>
                            No
                        </Button>

                    </div>

                </Card>


                ,
                overlay)
            }


        </Fragment>
    )
}



export default Logout;
