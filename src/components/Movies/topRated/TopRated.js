import { Fragment, useContext } from "react"
import GetMovies from "../store/GetMovies";
import Columns from "../../../UI/Columns/Columns";


const TopRated = () => {

    const {topRated}= useContext(GetMovies);

    return (
        <Fragment>
            <Columns
                sectionName='Top Rated'
                items={topRated}
                type='movie'
            />
        </Fragment>
    )
}



export default TopRated;