import { Fragment, useCallback, useEffect, useState } from "react";
import classes from './WatchPage.module.css';
import useHttp from "../../Hooks/useHttp";
import { Config, Type } from "../../store/Config";
import { Route, Switch, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Columns from "../../UI/Columns/Columns";
import WatchHeader from "./WatchHeader/WatchHeader";
import Seasons from "../Seasons/Seasons";
import Trailers from "./Trailers/Trailers";
import { useRouteMatch } from "react-router-dom";


const WatchPage = (props) => {

    const { sendRequest } = useHttp();
    const [recommend, setRecommend] = useState([]);
    const [similar, setSimilar] = useState([]);

    const params = useParams();
    const history = useHistory();
    const match = useRouteMatch();

    const { type } = props;

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const setRecommendHandler = useCallback((data) => {

        setRecommend(data.results);
    }, []);


    const setSimilarHandler = useCallback((data) => {

        setSimilar(data.results);
    }, []);



    useEffect(() => {
        setRecommend([]);


        sendRequest({
            ...Config,
            url: Config.baseUrl + (type === 'movie' ? Type.movie : Type.tv)
                + '/' + `${params.id}` + '/recommendations?language=en-US&page=1'
        }, setRecommendHandler);

        sendRequest({
            ...Config,
            url: Config.baseUrl + (type === 'movie' ? Type.movie : Type.tv)
                + '/' + `${params.id}` + '/similar?language=en-US&page=1'
        }, setSimilarHandler);

    }, [sendRequest, setRecommendHandler,setSimilarHandler, params.id]);

    const watchSeasonHanler = () => {
        history.push(`${match.url}/seasons`);
    }


    return (
        <Fragment>

            <WatchHeader type={type} />
            {type === 'tv' && <div className={classes.columnWrapper}>
                <button
                    onClick={watchSeasonHanler}
                    className={classes.button}
                >
                    Watch All Seasons Details
                </button>
            </div>}
            <Trailers type = {type}/>
            <div className={classes.columnWrapper}>
                {(recommend.length > 0) && <Columns
                    sectionName={'Recommendations'}
                    items={recommend}
                    type={type}
                />}
                {(recommend.length === 0) &&
                    <Columns
                        sectionName = {'similar'}
                        items = {similar}
                        type = {type}
                    />
                }
            </div>


        </Fragment >
    )
}


export default WatchPage;