import { Fragment } from "react"
import MainSwiper from "./MainSwiper/MainSwiper";
import TrendingMovies from "./TrendingMovies/TrendingMovies";
import classes from './Home.module.css';
import TopRatedMovies from "./TopRated/TopRatedMovies";
import TrendingTV from "./TrendingTV/TrendingTV";
import TopRatedTV from "./TopRatedTv/TopRatedTV";
import { GetHomeProvider } from "./store/getHome";

const Home = () => {


    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });


    return (
        <Fragment>
            <GetHomeProvider>
                <MainSwiper />
                <div className={classes.column_wrapper}>
                    <TrendingMovies />
                    <TopRatedMovies />
                    <TrendingTV />
                    <TopRatedTV />
                </div>

            </GetHomeProvider>


        </Fragment>

    )
}

export default Home;