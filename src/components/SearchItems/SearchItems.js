import { Fragment } from "react";
import classes from './SearchItems.module.css';
import { Link } from "react-router-dom";
import Columns from "../../UI/Columns/Columns";


const SearchItem = (props) => {

    const { results, type } = props;

    return (
        <Fragment>

            <Columns items={results} type = {type} />

        </Fragment>
    )
}


export default SearchItem;