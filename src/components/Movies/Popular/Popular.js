import { Fragment, useContext } from "react"
import GetMovies from "../store/GetMovies";
import Columns from "../../../UI/Columns/Columns";


const Popular = () => {

    const {pupolar}= useContext(GetMovies);

    return (
        <Fragment>
            <Columns
                sectionName='Popular'
                items={pupolar}
                type='movie'
            />
        </Fragment>
    )
}



export default Popular;