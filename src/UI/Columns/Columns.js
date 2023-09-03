import { Fragment } from "react";
import classes from './Columns.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { ReactComponent as Triangle } from '../../assists/caret-right-icon.svg';
import { useHistory } from "react-router-dom";
import { ReactComponent as Video } from '../../assists/movie-videos-icon.svg';



const Columns = (props) => {

    const history = useHistory();

    const viewMoreHandler = () => {
        history.push(`/${props.type === 'movie' ? 'Movies' : 'tv'}`)

    }

    const slideClickHandler = ({ id, type }) => {
        history.push(type === 'movie' ? `/Movies/${id}` : `/tv/${id}`);
    }

    return (
        <Fragment>

            <div className={classes.columnHeader}>
                <h3 className={classes.type}>
                    {props.sectionName}
                </h3>
                <button
                    className={classes.columnbutton}
                    onClick={viewMoreHandler}
                >
                    View more
                </button>
            </div>

            <Swiper
                modules={[Scrollbar]}
                slidesPerView={'auto'}
                initialSlide={0}
                scrollbar={{
                    dragSize: '150%',
                    hide: false,
                    draggable: true,
                    lockClass: 'swiper-scrollbar-lock',
                    dragClass: 'swiper-scrollbar-drag',
                    scrollbarDisabledClass: 'swiper-scrollbar-disabled',
                    horizontalClass: `swiper_scrollbar_horizontal`,
                    verticalClass: `swiper-scrollbar-vertical`
                }}
                draggable={true}
                className={classes.carousel}

            >
                {props.items.map((item) => {

                    return (
                        <SwiperSlide
                            key={item.id}
                            className={classes.inner_carousel}
                            onClick={slideClickHandler.bind(null, { id: item.id, type: props.type })}
                        >
                            <div className={classes.imageContainer}>
                                {
                                    !!item.poster_path === true
                                        ?
                                        <img
                                            className={classes.image}
                                            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}

                                        />
                                        :
                                        <Video className={classes.video} />
                                }
                                <div className={classes.watchEffect}>
                                    <span className={classes.watch}>
                                        <Triangle className={classes.triangle} />
                                    </span>
                                </div>

                            </div>


                            <p className={classes.title}>
                                {
                                    props.type === 'movie' ?
                                        item.title :
                                        item.name
                                }
                            </p>

                        </SwiperSlide>
                    )
                })}

            </Swiper>

        </Fragment>

    )
}

export default Columns;