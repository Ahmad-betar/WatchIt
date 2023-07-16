import { Fragment, useCallback, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";
import useHttp from "../../../Hooks/useHttp";
import { Config, Type } from "../../../store/Config";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from './SmallCast.module.css'
import {ReactComponent as Person } from '../../../assists/client-icon.svg';

const SmallCast = (props) => {

    const { sendRequest } = useHttp();
    const [cast, setCast] = useState([]);
    const params = useParams();
    const { type } = props;


    const setCastHandler = useCallback((data) => {
        setCast(data.cast.slice(0, 5));
    }, []);


    useEffect(() => {
        setCast([]);

        sendRequest({
            ...Config,
            url: Config.baseUrl + (type === 'movie' ? Type.movie : Type.tv)
                + '/' + `${params.id}` + '/credits?language=en-US'
        }, setCastHandler);


    }, [setCastHandler, sendRequest, params.id])


    return (
        <Fragment>
            <ul className={classes.ul}>

                {cast && cast.map((actor, index) => {
                    return (

                        <li
                            key={index}
                            className={classes.actor}
                        >
                            <Link to={`/Actors/${actor.id}`}>
                                {
                                    !!actor.profile_path  ?
                                        <img
                                            className={classes.img}
                                            src={`https://www.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}`}
                                        />
                                        :
                                    <Person />
                            }
                                <p className={classes.actorName}>
                                    {actor.name}
                                </p>
                                <p className={classes.character}>
                                    ({actor.character})
                                </p>
                            </Link>
                        </li>
                    )
                })}
                <li className={classes.viewMore}>
                    <Link to={`${params.id}/credits`}>
                        View More
                    </Link>
                </li>
            </ul>
        </Fragment >
    )
}

export default SmallCast;


