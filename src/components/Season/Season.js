import { Fragment, useCallback, useEffect, useState } from "react";
import classes from './Season.module.css';
import useHttp from "../../Hooks/useHttp";
import { Config, Type } from "../../store/Config";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CastHeader from "../Credits/CastHeader/CastHeader";
import { Link, useRouteMatch } from "react-router-dom";


const Season = (props) => {

    const { sendRequest } = useHttp();
    const [season, setSeason] = useState([]);
    const params = useParams();
    const { type } = props;
    const match = useRouteMatch();

    const setSeasonHandler = useCallback((data) => {
        console.log('season detail', data.episodes);
        setSeason(data.episodes);

    }, [])



    useEffect(() => {

        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.tv + '/' + params.id
                + '/season/' + params.seasonId + '?language=en-US',

        }, setSeasonHandler)

    }, [sendRequest, setSeasonHandler, params.id, params.seasonId]);







    return (
        <Fragment>
            <CastHeader type={type} />
            <div className={classes.season}>
                <ul className={classes.ul}>
                    {season.map((episode, index) => {

                        return (
                            <Fragment key={episode.id}>

                                <li
                                    className={classes.episode}
                                    key={episode.id}
                                >
                                    <img
                                        className={classes.img}
                                        src={`https://www.themoviedb.org/t/p/w130_and_h195_bestv2${episode.still_path}`}
                                    />
                                    <div className={classes.info}>
                                        <h2 className={classes.name}>
                                            {episode.name}
                                        </h2>
                                        <h4 className={classes.date}>
                                            {episode.air_date}
                                        </h4>
                                        <p className={classes.overview}>
                                            {episode.overview}
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

export default Season;
