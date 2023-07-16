

import { createContext, useCallback, useEffect, useState } from "react";
import useHttp from "../../../Hooks/useHttp";
import { Config, TvType, Type } from "../../../store/Config";

const GetTV = createContext({
    mainSwiper: [],
    trendingMovies: [],


});

export const GetTVProvider = (props) => {


    const { sendRequest } = useHttp();
    const [airingToday, setAiringToday] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [onTheAir, setOnTheAir] = useState([]);



    const makeList = (data, num) => {
        const li = [];
        for (let index = 0; index < num; index++) {
            li.push(data.results[index]);
        }
        return li;
    }





    const airingTodayandler = useCallback((data) => {

        setAiringToday(makeList(data, 20));
    }, []);

    const popularHandler = useCallback((data) => {

        setPopular(makeList(data, 20));
    }, []);


    const topRatedHandler = useCallback((data) => {

        setTopRated(makeList(data, 20));
    }, []);

    const onTheAirHandler = useCallback((data) => {

        setOnTheAir(makeList(data, 20));
    }, []);




    useEffect(() => {


        sendRequest({
            ...Config,
            url: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc'
            // url: Config.baseUrl + Type.tv + '/' + TvType.airingTody + '?language=en-US&page=1'
        }, airingTodayandler);

        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.tv+ '/' + TvType.popular + '?language=en-US&page=1'
        }, popularHandler);

        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.tv + '/'+ TvType.topRated + '?language=en-US&page=1'
        }, topRatedHandler);

        sendRequest({
            ...Config,
            url: Config.baseUrl + Type.tv + '/'+ TvType.onTheAir + '?language=en-US&page=1'
        }, onTheAirHandler);


    }, [sendRequest, airingTodayandler, popularHandler, topRatedHandler, onTheAirHandler]);


    return (
        <GetTV.Provider
            value={{
                airingToday,
                popular,
                topRated,
                onTheAir,
            }}
        >
            {props.children}
        </GetTV.Provider>
    );
};

export default GetTV;
