import { Fragment, useCallback, useEffect, useState } from "react"
import classes from './WatchHeader.module.css';
import useHttp from "../../../Hooks/useHttp";
import { Config, Type } from "../../../store/Config";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import SmallCast from "../SmallCast/SmallCast";


const WatchHeader = (props) => {

    const [showData, setShowData] = useState({});
    const { sendRequest } = useHttp();
    const params = useParams();
    const { type } = props;

    console.log(showData);
    const showDataHandler = useCallback((data) => {
        setShowData(data)

    }, []);



    useEffect(() => {

        setShowData([]);

        sendRequest({
            ...Config,
            url: Config.baseUrl + (type === 'movie' ? Type.movie : Type.tv)
                + '/' + `${params.id}` + '?language=en-US'
        }, showDataHandler);

    }, [sendRequest, showDataHandler, params.id]);



    return (
        <Fragment>

            { <div
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${showData.backdrop_path})` }}
                className={classes.backpic}
            >
                <div className={classes.shadow}>
                    <section className={classes.all}>
                        <div className={classes.pic}>
                            {showData.poster_path && <img
                                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${showData.poster_path}`}
                                className={classes.img}
                            />}
                        </div>
                        <div className={classes.info}>
                            {
                                showData.name && type === 'tv' &&
                                <h2 className={classes.title}>
                                    {showData.name}
                                    {`\t`}
                                    ({showData.first_air_date.slice(0, 4)})
                                </h2>
                            }
                            {
                                showData.title && type === 'movie' &&
                                <h2 className={classes.title}>
                                    {showData.title}
                                    {`\t`}
                                    ({showData.release_date.slice(0, 4)})
                                </h2>
                            }
                            <ul className={classes.ul}>
                                {showData.genres && showData.genres.map((genre) => {
                                    return <li
                                        key={genre.id}
                                        className={classes.li}>{genre.name}</li>
                                })}

                            </ul>
                            <p className={classes.overview}>{showData.overview}</p>
                            <SmallCast type={type} />
                        </div>
                    </section>
                </div>
            </div>}

        </Fragment>
    )
}

export default WatchHeader;

