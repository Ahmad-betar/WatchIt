import { Fragment, useCallback, useEffect, useState } from "react"
import classes from './Search.module.css';
import useHttp from "../../Hooks/useHttp";
import { Config, Type } from "../../store/Config";
import { useHistory, useRouteMatch } from "react-router-dom";


const Search = (props) => {

    const [searchValue, setSearchValue] = useState('');


    const setSearchValueHandler = useCallback((event) =>{
        setSearchValue(event.target.value);
        props.onChange(event.target.value);
    }, [])


    return (
        <Fragment>
            <div className={classes.search}>
                <input
                    className={classes.input}
                    onChange={setSearchValueHandler}
                    value={searchValue}
                    placeholder='Enter Keyword'
                />
                <button
                    className={classes.button}
                >
                    Search
                </button>
            </div>
        </Fragment>
    )
}

export default Search;
