import { Fragment, forwardRef } from "react";
import classes from './Input.module.css';


const Input = forwardRef((props,ref) => {

    return (
        <Fragment>
            <label
                className= {classes.label}
                htmlFor={props.id}

            >
                {props.children}
            </label>
            <input
                className= {`${classes.input} ${props.className}`}
                id={ props.id }
                ref={ ref }
                type={ props.type }
                minLength = { props.minLength }
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
            />
        </Fragment>
    )
});

export default Input;