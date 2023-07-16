import { Fragment, useContext } from "react"
import GetTV from "../store/GetTV";
import Columns from "../../../UI/Columns/Columns";


const AiringToday = () => {

    const {airingToday}= useContext(GetTV);

    return (
        <Fragment>
            <Columns
                sectionName='Airing Today'
                items={airingToday}
                type='tv'
            />
        </Fragment>
    )
}



export default AiringToday;