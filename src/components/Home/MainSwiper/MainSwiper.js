import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import classes from './MainSwiper.module.css';
import { Autoplay, Navigation, Pagination } from 'swiper';
import GetHome from '../store/getHome';
import './style.css';
import Trailer from './Trailer/Trailer';
import { useHistory } from 'react-router-dom';
const MainSwiper = () => {

    const { mainSwiper } = useContext(GetHome);
    const [trailer, setTrailer] = useState(false);
    const [itemId, setItemId] = useState(null);
    const [itemType, setItemType] = useState(null);
    const history = useHistory();


    const showTrailerHandler = ({ id, type }) => {
        setTrailer(true);
        setItemId(id);
        setItemType(type);

    }
    const hideTrailerHandler = () => {
        setTrailer(false);
    }

    const slideClickHandler = ({ id, type }) => {
        history.push(type === 'movie' ? `/Movies/${id}` : `/tv/${id}`);
    }



    return (
        <Fragment>
            {trailer && <Trailer itemType={itemType} itemId={itemId} onHide={hideTrailerHandler} />}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}

                pagination={{
                    clickable: true,
                    type: 'bullets',
                    /*// el: 'swiper-containerdsfwef',
                    // bulletElement: 'span',
                    // hideOnClick: false,
                    // renderBullet: true,
                    // renderProgressbar: true,
                    // renderFraction: null,
                    // renderCustom: null,
                    // progressbarOpposite: false,
                    // 'bullets' or 'progressbar' or 'fraction' or 'custom'*/
                }}
                // loop = {true}
                initialSlide={0}
                className={classes.carousel}
                autoplay={{
                    enabled: true,
                    delay: 3000,
                    waitForTransition: false,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }}
            >

                {mainSwiper.map((item) => (

                    <SwiperSlide
                        key={item.id}
                        className={classes.inner_carousel}
                    >

                        <div
                            className={classes.swipe}
                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}` }}

                        >
                            <div className={classes.shadow}>
                                <section className={`${classes.section} section`}>
                                    <div className={`${classes.info} info`}>
                                        <h1 className={`${classes.title} title`}>
                                            {item.media_type === 'movie' ? item.title : item.name}
                                        </h1>
                                        <p className={`${classes.overview} overview`}>{item.overview}</p>
                                        <div className={`${classes.buttons} buttons`}>
                                            <button
                                                className={classes.watchNow}
                                                onClick={slideClickHandler.bind(null, { id: item.id, type: item.media_type })}
                                            >
                                                Watch now
                                            </button>
                                            <button
                                                className={classes.watchTrailer}
                                                onClick={showTrailerHandler.bind(null, { id: item.id, type: item.media_type })}
                                            >
                                                Watch trailer
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${classes.poster} poster`}>
                                        <img
                                            className={classes.img}
                                            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} />
                                    </div>
                                </section>

                            </div>

                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>


        </Fragment >
    );
};

export default MainSwiper;


