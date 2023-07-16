import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Config, Type } from "../../../store/Config";
import classes from './CastHeader.module.css'
import useHttp from "../../../Hooks/useHttp";

const CastHeader = (props) => {

    const [show, setShow] = useState({});
    const params = useParams();
    const {sendRequest } =useHttp();
    const { type }= props;


    
    const watchDetailsHandler = useCallback((data) => {
        setShow(data);
    }, []);

    console.log(show,'show');

    useEffect(() => {
        sendRequest({
            ...Config,
            url: Config.baseUrl + (type === 'movie' ? Type.movie : Type.tv)
                + '/' + `${params.id}` + '?language=en-US'
        }, watchDetailsHandler);
    }, [watchDetailsHandler, setShow])



    return (
        <Fragment>
            {!!show.backdrop_path && <div
                className={classes.watchHeader}
                style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${show.backdrop_path})` }}
            >
                <div className={classes.style}>
                    <div className={classes.wrapper}>
                        <div className={classes.element}>
                            {!!show.poster_path && <img
                                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${show.poster_path}`}
                                className={classes.image}
                            />}
                            {(!!show.release_date && type === 'movie') && <p className={classes.title}>
                                {show.title}{`\t`}
                                ({show.release_date.slice(0, 4)})
                            </p>}
                            {(!!show.original_name && type === 'tv') && <p className={classes.title}>
                                {show.name}{`\t`}
                                ({show.first_air_date.slice(0, 4)})
                            </p>}
                        </div>

                    </div>
                </div>
            </div>}
        </Fragment>
    )
}

export default CastHeader;