import { Fragment, useCallback, useEffect, useState } from "react"
import classes from './People.module.css';
import useHttp from "../../Hooks/useHttp";
import { Config, Type, peopleType } from "../../store/Config";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Search from "../../UI/Search/Search";
import { ReactComponent as Per } from '../../assists/client-icon.svg';
import Person from "../Person/Person";



const People = () => {

    const [people, setPeople] = useState([]);
    const [count, setCount] = useState(1);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [value, setValue] = useState('');
    const { sendRequest } = useHttp();

    const match = useRouteMatch();

    const setPeopleHandler = useCallback((data) => {
        console.log(data.results);
        setPeople((prev) => prev.concat(data.results));

    }, [])

    const viewMoreHandler = () => {
        setCount((prev) => prev + 1);
    }


    const setResultsHandler = (data) => {
        setResults(data.results);

    }

    const searchHandler = (data) => {
        setValue(data);
        const d = data.trim().split(' ').join('%20');


        sendRequest({
            ...Config,
            url: Config.baseUrl + '/search/' + Type.person + `?query=${d}&include_adult=false&language=en-US&page=${page}`
        }, setResultsHandler);

    }






    useEffect(() => {
        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.person + '/' + peopleType.popular
                + `?language=en-US&page=${count}`
        }, setPeopleHandler)
    }, [sendRequest, setPeopleHandler, count])


    return (
        <Fragment>
            <div className={classes.media}>
                <div className={classes.shadow}>
                    Actors
                </div>
            </div>
            <Switch>
                <Route path='/Actors' exact>
                    <div className={classes.columnWrapper}>
                        <Search onChange={searchHandler} />
                        {(results.length === 0 && value.trim().length === 0) &&
                            <Fragment>

                                <ul className={classes.ul}>
                                    {
                                        people.map((actor) => {
                                            return (
                                                <li
                                                    className={classes.actor}
                                                    key={actor.id}
                                                >
                                                    <div className={classes.card}>
                                                        <Link to={`${match.path}/${actor.id}`}>
                                                            {!!actor.profile_path && <img
                                                                src={`https://www.themoviedb.org/t/p/w235_and_h235_face${actor.profile_path}`}
                                                                className={classes.img}
                                                            />}
                                                            {
                                                                !actor.profile_path && <Per className={classes.person} />
                                                            }
                                                            <p className={classes.name}>
                                                                {actor.name}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <button
                                    className={classes.view}
                                    onClick={viewMoreHandler}
                                >
                                    View more
                                </button>
                            </Fragment>
                        }
                        {
                            (results.length === 0 && value.trim().length > 0) &&
                            <p className={classes.noMovie}>There Is No Actors</p>
                        }
                        {
                            (results.length > 0 && value.trim().length > 0) && (

                                <ul className={classes.ul}>
                                    {results.map((actor) => {

                                        return (
                                            <Fragment key={actor.id}>
                                                <li
                                                    className={classes.actor}
                                                    key={actor.id}
                                                >
                                                    <div className={classes.card}>
                                                        <Link to={`${match.path}/${actor.id}`}>
                                                            {!!actor.profile_path && <img
                                                                src={`https://www.themoviedb.org/t/p/w235_and_h235_face${actor.profile_path}`}
                                                                className={classes.img}
                                                            />}
                                                            {
                                                                !actor.profile_path && <Per className={classes.person} />
                                                            }
                                                            <p className={classes.name}>
                                                                {actor.name}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </Fragment>
                                        )
                                    }
                                    )}
                                </ul>
                            )
                        }
                    </div>
                </Route>
                <Route path='/Actors/:actorId' exact>
                    <Person />
                </Route>
            </Switch>


        </Fragment >
    )

}

export default People;