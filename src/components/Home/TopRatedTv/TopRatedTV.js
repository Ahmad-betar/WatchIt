import { Fragment, useContext } from "react";

import Columns from "../../../UI/Columns/Columns";
import GetHome from "../store/getHome";


const TopRatedTV = () => {

    const {topRatedTV} = useContext(GetHome);


    return (
        <Fragment>
            <Columns
                sectionName='Top Rated TV'
                items = {topRatedTV}
                type = 'tv'

            />

        </Fragment>
    )

}


export default TopRatedTV;


