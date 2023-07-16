import { Fragment, useContext } from "react"
import GetMovies from "../store/GetMovies";
import Columns from "../../../UI/Columns/Columns";


const Upcoming = () => {

    const {upcoming}= useContext(GetMovies);

    return (
        <Fragment>
            <Columns
                sectionName='Upcoming'
                items={upcoming}
                type='movie'
            />
        </Fragment>
    )
}



export default Upcoming;