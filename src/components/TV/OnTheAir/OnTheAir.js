import { Fragment, useContext } from "react"
import GetTV from "../store/GetTV";
import Columns from "../../../UI/Columns/Columns";


const OnTheAir = () => {

    const {onTheAir}= useContext(GetTV);

    return (
        <Fragment>
            <Columns
                sectionName='On TV'
                items={onTheAir}
                type='tv'
            />
        </Fragment>
    )
}



export default OnTheAir;