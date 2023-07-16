import { Fragment, useContext } from "react";
import Columns from "../../../UI/Columns/Columns";
import GetHome from "../store/getHome";


const TrendingMovies = () => {

    const {trendingMovies} = useContext(GetHome);

    return (
        <Fragment>
            <Columns
                sectionName='Trending movies'
                items = {trendingMovies}
                type = 'movie'

            />

        </Fragment>
    )

}


export default TrendingMovies;



