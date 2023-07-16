import classes from './Modal.module.css';
import { useDispatch } from "react-redux";
import { sideBarActions } from '../../store/SideBar-slice';


export const BackDrop = (props) => {


    return (
        <div className={classes.backdrop} onClick={props.onClick}>

        </div>
    )
}


export const ModalOverlay = (props) => {

    return (
        <div className={`${classes.modaloverlay} ${props.className}`}>
            {props.children}
        </div>
    )
}
