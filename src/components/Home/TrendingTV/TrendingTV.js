import { Fragment, useContext } from "react";

import Columns from "../../../UI/Columns/Columns";
import GetHome from "../store/getHome";


const TrendingTV = () => {

    const {trendingTV} = useContext(GetHome);

    return (
        <Fragment>
            <Columns
                sectionName='Trending TV'
                items = {trendingTV}
                type = 'tv'

            />

        </Fragment>
    )

}


export default TrendingTV;


