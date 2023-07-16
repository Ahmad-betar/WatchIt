





import { createContext, useCallback, useEffect, useState } from "react";
import useHttp from "../../../Hooks/useHttp";
import { Config, MovieType, TvType, Type } from "../../../store/Config";


const GetMovies = createContext({
    mainSwiper: [],
    trendingMovies: [],


});

export const GetMoviesProvider = (props) => {


    const { sendRequest } = useHttp();
    const [nowPlaying, setNowPlaying] = useState([]);
    const [pupolar, setPupolar] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);



    const makeList = (data, num) => {
        const li = [];
        for (let index = 0; index < num; index++) {
            li.push(data.results[index]);
        }
        return li;
    }





    const nowPlayingHandler = useCallback((data) => {

        setNowPlaying(makeList(data, 20));
    }, []);

    const pupolarHandler = useCallback((data) => {

        setPupolar(makeList(data, 20));
    }, []);


    const topRatedHandler = useCallback((data) => {

        setTopRated(makeList(data, 20));
    }, []);

    const upcomingHandler = useCallback((data) => {

        setUpcoming(makeList(data, 20));
    }, []);




    useEffect(() => {


        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.movie + '/' + MovieType.now_playing + '?language=en-US&page=1',
        }, nowPlayingHandler);


        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.movie + '/' + MovieType.popular + '?language=en-US&page=1',
        }, pupolarHandler);

        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.movie + '/' + MovieType.topRated + '?language=en-US&page=1',
        }, topRatedHandler);


        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.movie + '/' + MovieType.upcoming + '?language=en-US&page=1',
        }, upcomingHandler);


    }, [sendRequest, nowPlayingHandler, pupolarHandler, topRatedHandler, upcomingHandler]);


    return (
        <GetMovies.Provider
            value={{
                nowPlaying,
                pupolar,
                topRated,
                upcoming,
            }}
        >
            {props.children}
        </GetMovies.Provider>
    );
};

export default GetMovies;

// https://api.themoviedb.org/3/trending/movie/day?language=en-US