import { Fragment, useCallback, useEffect, useState } from "react"
import useHttp from "../../Hooks/useHttp"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Config, Type } from "../../store/Config";
import classes from './Credits.module.css';
import WatchDetail from "./CastHeader/CastHeader";
import CastList from "./CastList/CastList";



const Credits = (props) => {

    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const { sendRequest } = useHttp();
    const {type} = props;

    const params = useParams();

    const setCreditsHandler = useCallback((data) => {
        setCast(data.cast);
        setCrew(data.crew);
    }, []);



    useEffect(() => {
        sendRequest({
            ...Config,
            url: Config.baseUrl + (type === 'movie' ? Type.movie : Type.tv) + '/' + (params.id)
                + '/credits?language=en-US'
        }, setCreditsHandler);


    }, [sendRequest, setCreditsHandler,])


    return (
        <Fragment>

            <WatchDetail type = {type} />
            <div className={classes.credits}>
                <div className={classes.cast}>
                    <CastList list={cast} listName='Cast' />
                </div>
                <div className={classes.crew}>
                    <CastList
                        list={crew}
                        listName='Crew'
                        
                    />

                </div>
            </div>

        </Fragment>
    )
}


export default Credits;