import { createSlice } from "@reduxjs/toolkit";
import useHttp from "../Hooks/useHttp";
import Config from "./Config";


const {sendRequest} = useHttp();

const getSlice = createSlice({
    name: 'get',
    initialState : {
        moviesList:[],

    },
    reducers: {
        setMoviesList(state, action){
            state.moviesList = action.payload;
        },
        getMoviesList(state, action){
            sendRequest({
                ...Config,
                url: Config.baseUrl + '/movie'+ action.payload,
            }, this.setMoviesList)
        }


    }
    

})
export const authActions = getSlice.actions;
export default getSlice;