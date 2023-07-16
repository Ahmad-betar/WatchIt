import { Fragment, useCallback, useEffect, useState } from "react"
import classes from './Person.module.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useHttp from "../../Hooks/useHttp";
import { Config, Type } from "../../store/Config";
import { Link } from "react-router-dom";


const Person = () => {

    const params = useParams();
    const [detail, setDetail] = useState({});
    const [creditsCast, setCreditsCast] = useState([]);
    const [creditsCrew, setCreditsCrew] = useState([]);

    const { sendRequest } = useHttp();

    const setDetailHandler = useCallback((data) => {
        console.log(data);
        setDetail(data);
    }, []);

    const setMovieCreditsHandler = useCallback((data) => {
        console.log(data);
        const cast = data.cast;
        const crew = data.crew;
        cast.sort((a, b) => {
            const dateA = new Date(a.release_date);
            const dateB = new Date(b.release_date);

            return dateB - dateA;
        }).filter((movie) => movie.release_date != "");
        console.log(cast, 'acsddscasdcsafsdaf');
        setCreditsCast(cast);
        setCreditsCrew(data.crew);

    }, []);


    useEffect(() => {
        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.person + `/${params.actorId}?language=en-U`
        }, setDetailHandler)

        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.person + `/${params.actorId}/combined_credits?language=en-US`
        }, setMovieCreditsHandler)

    }, [sendRequest, setDetailHandler, setMovieCreditsHandler])


    return (
        <Fragment>
            <div className={classes.all}>
                <div className={classes.first}>
                    {detail.profile_path && <img
                        className={classes.img}
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.profile_path}`}
                    />}

                    <h3 className={classes.personalInfo}>
                        Personal Info
                    </h3>
                    <h4>
                        Known For:
                    </h4>
                    <p>
                        {detail.known_for_department}
                    </p>
                    <h4>
                        Birthday:
                    </h4>
                    <p>
                        {detail.birthday}
                    </p>
                    <h4>
                        Place Of Birth:
                    </h4>
                    <p>
                        {detail.place_of_birth}
                    </p>
                    <h4>
                        Also Known As:
                    </h4>
                    {detail.also_known_as && <ul className={classes.ul}>
                        {
                            detail.also_known_as.map((name, ind) => {
                                return (
                                    <li className={classes.name}
                                        key={ind}
                                    >
                                        {name}
                                    </li>
                                )
                            })
                        }
                    </ul>}
                </div>
                <div className={classes.second}>
                    <h2 className={classes.name}>
                        {detail.name}
                    </h2>
                    <p>
                        Biography:
                    </p>
                    <p className={classes.biography}>
                        {detail.biography}
                    </p>
                    <h5 className={classes.acting}>
                        Acting
                    </h5>
                    <table className={classes.table}>
                        {creditsCast &&
                            creditsCast.map((movie, index) => {
                                return (
                                    <tr key={index} className={classes.tr}>
                                        <td >
                                            <Link to={`/Movies/${movie.id}`}>
                                                <img
                                                    className={classes.img}
                                                    src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${movie.poster_path}`}
                                                />
                                            </Link>

                                        </td>
                                        <td className={classes.date}>{movie.release_date}</td>
                                        <td>
                                            <Link to={`/Movies/${movie.id}`}
                                                className={classes.title}
                                            >
                                                {movie.title}
                                            </Link>

                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </Fragment>
    )
}


export default Person;

