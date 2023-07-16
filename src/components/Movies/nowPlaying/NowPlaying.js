
import { useContext } from "react";
import Columns from "../../../UI/Columns/Columns";
import GetMovies from "../store/GetMovies";

const NowPlaying = () => {
    const {nowPlaying}= useContext(GetMovies);
    return (
        <Columns
            sectionName='Now Playing'
            items={nowPlaying}
            type='movie'
        />

    )
}


export default NowPlaying;

