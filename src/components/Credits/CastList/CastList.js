import { Fragment } from "react"
import classes from './CastList.module.css';
import { Link } from "react-router-dom";
import { ReactComponent as Annonymous } from './../../../assists/client-icon.svg';

const CastList = (props) => {

    const { list, listName } = props;


    return (
        <Fragment>
            <div className={classes.cast}>
                <p>{listName}</p>
                <div className={classes.people}>
                    <ul className={classes.ul}>

                        {list.map((person, inx) => {

                            return (
                                <li
                                    className={classes.person}
                                    key={inx}
                                >
                                    {
                                        !!person.profile_path === true ?
                                            <Link to={`/Actors/${person.id}`}>
                                                <img src={`https://www.themoviedb.org/t/p/w66_and_h66_face${person.profile_path}`} />
                                            </Link>
                                            :
                                            <Link
                                                className={classes.Annonymous}
                                                to={`/Actors/${person.id}`}
                                            >
                                                <Annonymous />
                                            </Link>

                                    }

                                    <div className={classes.names}>
                                        <Link to='/Home'>
                                            <p className={classes.name}>{person.name}</p>
                                        </Link>
                                        {
                                            listName === 'Cast' ?
                                                <p className={classes.character}>{person.character}</p>
                                                :
                                                <p className={classes.character}>{person.job}</p>

                                        }

                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </Fragment>
    )
}


export default CastList;
