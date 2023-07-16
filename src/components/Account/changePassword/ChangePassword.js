import { Fragment, useRef, useState } from "react";
import classes from './ChangePassword.module.css';
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import useHttp from "../../../Hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/Auth-slice";
import { useHistory } from "react-router-dom";
import { BackDrop, ModalOverlay } from "../../../UI/Modal/Modal";
import { createPortal } from "react-dom";
import LoadingIndicator from "../../../UI/LoadingSpinner/LoadingIndicator";
import Card from "../../../UI/Card/card";



const ChangePassword = (props) => {

    const [isFormValid, setIsFormValid] = useState(false);
    const [isEqual, setIsEqual] = useState(true);

    const { isLoading, error, sendRequest: changePass } = useHttp();
    const passwordRef = useRef();
    const confirmRef = useRef();
    const idToken = useSelector((state) => state.auth.idToken);
    const dispatch = useDispatch();
    const history = useHistory();



    const formValidHandler = () => {
        const passValid = passwordRef.current.value.trim().length >= 7;
        const confirmValid = confirmRef.current.value.trim().length >= 7;
        const formValid = passValid && confirmValid;
        setIsFormValid(formValid);


    }

    const changeTokenHandler = (token) => {
        dispatch(authActions.setIdToken(token.idToken));
    }

    const changeHandler = (event) => {
        event.preventDefault();
        let equal;

        const passValue = passwordRef.current.value.trim();
        const confirmValue = confirmRef.current.value.trim();
        equal = (passValue === confirmValue);




        setIsEqual(equal);
        if (equal) {
            changePass({
                url: 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBTzkbggiObw3QGVd0Am32tGk3aRS5pAzo',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    idToken: idToken,
                    password: passwordRef.current.value,
                    returnSecureToken: true,
                }
            },
                changeTokenHandler
            )

            // history.replace('/Home');

        }

    }

    const hideChangeHandler = () => {
        props.onHide();
    }


    const overlay = document.getElementById('overlay');
    const backdrop = document.getElementById('backdrop');



    return (
        <Fragment>

            {
                createPortal(
                    <BackDrop onClick={hideChangeHandler}
                    />,
                    backdrop)
            }
            {
                createPortal(
                    <Card
                        className={classes.change}>
                        <p className={classes.passText}>Change Password!</p>
                        <form
                            className={classes.form}
                            onSubmit={changeHandler}
                        >
                            <Input
                                className={classes.input}
                                onChange={formValidHandler}
                                ref={passwordRef}
                                type='password'
                            >
                                password
                            </Input>
                            <Input
                                className={classes.input}
                                onChange={formValidHandler}
                                ref={confirmRef}
                                type='password'

                            >
                                confirm password
                            </Input>
                            <div className={classes.line}>
                                {!isEqual && <p className={classes.notEqual}>doesn't equal</p>}
                                {isLoading && <LoadingIndicator />}

                            </div>
                            <Button
                                className={classes.button}
                                disabled={!isFormValid}>
                                Change
                            </Button>
                        </form>
                        {error && <p>{error}</p>}

                    </Card>


                    ,
                    overlay)
            }
        </Fragment>

    )
}




export default ChangePassword;
