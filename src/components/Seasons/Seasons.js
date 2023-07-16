import { Fragment, useCallback, useEffect, useState } from "react"
import classes from './Seasons.module.css';
import useHttp from "../../Hooks/useHttp";
import { Config, Type } from "../../store/Config";
import { useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import CastHeader from "../Credits/CastHeader/CastHeader";
import { Link } from "react-router-dom";


const Seasons = (props) => {


    const [seasons, setSeasons] = useState([]);
    const [seasonDetail, setSeasonDetail] = useState([]);
    const params = useParams();
    const match = useRouteMatch();
    const { sendRequest } = useHttp();
    const { type } = props;

    const setSeasonsHandler = useCallback((data) => {

        const seasons = data.seasons.filter((season) => season.name !== 'Specials');
        setSeasons(seasons);

    }, []);


    useEffect(() => {

        setSeasons([]);


        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.tv + '/' + params.id + '?language=en-US'
        }, setSeasonsHandler);


    }, [sendRequest, setSeasonsHandler, params.id])


    return (
        <Fragment>
            <CastHeader type={type} />
            <div className={classes.seasons}>
                <ul className={classes.ul}>
                    {seasons.map((season, index) => {

                        return (
                            <Fragment key={season.id}>

                                <li
                                    className={classes.season}
                                    key={season.id}
                                >
                                    <Link to={`${match.url}/${index + 1}`}>
                                        <img
                                            className={classes.img}
                                            src={`https://www.themoviedb.org/t/p/w130_and_h195_bestv2${season.poster_path}`}
                                        />
                                    </Link>
                                    <div className={classes.info}>
                                        <Link to={`${match.url}/${index + 1}`}>
                                            <h2 className={classes.name}>
                                                {season.name}
                                            </h2>
                                        </Link>
                                        <h4 className={classes.date}>
                                            {season.air_date}
                                        </h4>
                                        <h3 className={classes.count}>
                                            {`${season.episode_count}\t\tEpisodes`}
                                        </h3>
                                        <p className={classes.overview}>
                                            {season.overview}
                                        </p>

                                    </div>


                                </li>
                                <hr />
                            </Fragment>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    )
}


export default Seasons;