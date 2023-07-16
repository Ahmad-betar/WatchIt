import { createContext, useCallback, useEffect, useState } from "react";
import useHttp from "../../../Hooks/useHttp";


import { Config, MovieType, TvType, Type } from "../../../store/Config";

const GetHome = createContext({
    mainSwiper: [],
    trendingMovies: [],
    topRatedMovies: [],
    trendingTV: [],
    topRatedTV: [],
    // setMainSwiper: () =>{},
    // setTrendingMovies: () =>{},
    // setTopRatedMovies: () =>{},
    // setTrendingTV: () =>{},
    // setTopRatedTV: () =>{},


});

export const GetHomeProvider = (props) => {


    const { sendRequest } = useHttp();
    const [mainSwiper, setMainSwiper] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [trendingTV, setTrendingTV] = useState([]);
    const [topRatedTV, setTopRatedTV] = useState([]);



    const makeList = (data, num) => {
        const li = [];
        for (let index = 0; index < num; index++) {
            li.push(data.results[index]);
        }
        return li;
    }



    const mainSwiperHandler = useCallback((data) => {

        setMainSwiper(makeList(data, 10));

    }, []);

    const trendingMoviesHandler = useCallback((data) => {
        setTrendingMovies(makeList(data, 20));
    }, []);

    const topRatingMoviesHandler = useCallback((data) => {

        setTopRatedMovies(makeList(data, 20));
    }, []);


    const trendingTVHandler = useCallback((data) => {

        setTrendingTV(makeList(data, 20));
    }, []);

    const topRatingTVHandler = useCallback((data) => {

        setTopRatedTV(makeList(data, 20));
    }, []);



    useEffect(() => {
        sendRequest({
            ...Config,
            url: `${Config.baseUrl}${MovieType.trending}/${Type.all}/day?language=en-US`,
        }, mainSwiperHandler);

        sendRequest({
            ...Config,
            url: `${Config.baseUrl}${MovieType.trending}/${Type.movie}/day?language=en-US`,
        }, trendingMoviesHandler);


        sendRequest({
            ...Config,
            url: `${Config.baseUrl}${Type.movie}/${MovieType.topRated}?language=en-US`,
        }, topRatingMoviesHandler);

        sendRequest({

            ...Config,
            url: `${Config.baseUrl}${TvType.trending}/${Type.tv}/day?language=en-US`,
        }, trendingTVHandler);


        sendRequest({
            ...Config,
            url: `${Config.baseUrl}${Type.tv}/${TvType.topRated}?language=en-US`,
        }, topRatingTVHandler);


    }, [sendRequest, trendingMoviesHandler, mainSwiperHandler, topRatingMoviesHandler,]);


    return (
        <GetHome.Provider
            value={{
                mainSwiper,
                trendingMovies,
                topRatedMovies,
                trendingTV,
                topRatedTV
            }}
        >
            {props.children}
        </GetHome.Provider>
    );
};

export default GetHome;
