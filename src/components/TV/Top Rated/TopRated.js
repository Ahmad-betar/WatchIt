import { Fragment, useContext } from "react"
import GetTV from "../store/GetTV";
import Columns from "../../../UI/Columns/Columns";


const TopRated = () => {

    const {topRated}= useContext(GetTV);

    return (
        <Fragment>
            <Columns
                sectionName='Top Rated'
                items={topRated}
                type='tv'
            />
        </Fragment>
    )
}



export default TopRated;