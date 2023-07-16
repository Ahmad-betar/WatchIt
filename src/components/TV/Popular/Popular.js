import { Fragment, useContext } from "react"
import GetTV from "../store/GetTV";
import Columns from "../../../UI/Columns/Columns";


const Popular = () => {

    const {popular}= useContext(GetTV);

    return (
        <Fragment>
            <Columns
                sectionName='Popular'
                items={popular}
                type='tv'
            />
        </Fragment>
    )
}



export default Popular;