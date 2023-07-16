import { Fragment, useContext } from "react"
import Columns from "../../../UI/Columns/Columns";
import GetHome from '../store/getHome';



const TopRatedMovies = () => {


    const { topRatedMovies } = useContext(GetHome);


    return (
        <Fragment>
            <Columns
                sectionName= 'Top Rated Movies'
                items={topRatedMovies}
                type = 'movie'
            />
        </Fragment>
    )
}




export default TopRatedMovies;