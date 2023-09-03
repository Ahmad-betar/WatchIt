import { Fragment, useCallback, useEffect, useState } from "react";
import classes from './Trailers.module.css';
import useHttp from "../../../Hooks/useHttp";
import { Config, Type } from "../../../store/Config";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";



const Trailers = (props) => {

    const [videos, setVideos] = useState([]);
    const { sendRequest } = useHttp();
    const params = useParams();
    const {type} = props;


    const setVideosHandler = useCallback((data) => {
        const li = [];
        const trailers = data.results.filter((vedio) => {
            return vedio.type === 'Trailer';
        })
        const official = trailers.filter((vedio) => {
            return vedio.name === 'Official Trailer';
        })

        setVideos([...official, ...data.results.slice(0, 4)]);

    }, []);

    useEffect(() => {
        setVideos([]);

        sendRequest({
            ...Config,
            url: Config.baseUrl+ (type === 'movie' ? Type.movie : Type.tv)+ '/'  + (params.id)
               + '/videos?language=en-US',
        }, setVideosHandler);

    }, [ sendRequest, setVideosHandler, params.id]);



    return (
        <Fragment>
            <div className={classes.wrapper}>
                <ul className={classes.ul}>

                    {videos.map((video) => {

                        return (
                            <li
                                className={classes.video}
                                key={video.id}
                            >
                                <p className={classes.videoName}>{video.name}</p>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                >
                                </iframe>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </Fragment>
    )
}


export default Trailers;