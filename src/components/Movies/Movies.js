import { Fragment, useEffect, useState } from 'react';
import classes from './Movies.module.css';
import Popular from './Popular/Popular';
import { GetMoviesProvider } from './store/GetMovies';
import NowPlaying from './nowPlaying/NowPlaying';
import TopRated from './topRated/TopRated';
import Upcoming from './upcoming/Upcoming';
import Search from '../../UI/Search/Search';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import WatchPage from '../WatchPage/WatchPage';
import Credits from '../Credits/Credits';
import useHttp from '../../Hooks/useHttp';
import { Config, Type } from '../../store/Config';
import SearchItem from '../SearchItems/SearchItems';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const Movies = () => {



    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [value, setValue] = useState('');
    const { sendRequest } = useHttp();

    
    const setResultsHandler = (data) => {
        setResults(data.results);
        
    }
    
    const searchHandler = (data) => {
        setValue(data);
        const d = data.trim().split(' ').join('%20');
        

        sendRequest({
            ...Config,
            url: Config.baseUrl + '/search/' + Type.movie + `?query=${d}&include_adult=false&language=en-US&page=${page}`
        }, setResultsHandler);
        
    }



    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <Fragment>
            <Switch >
                <Route path='/Movies' exact>

                    <div className={classes.media}>
                        <div className={classes.shadow}>
                            Movies
                        </div>
                    </div>

                    <div className={classes.columnWrapper}>
                        <Search onChange={searchHandler} />
                        {(results.length === 0 && value.trim().length === 0)&&
                            <GetMoviesProvider>
                                <Popular />
                                <NowPlaying />
                                <TopRated />
                                <Upcoming />

                            </GetMoviesProvider>
                        }
                        {(results.length === 0 && value.trim().length > 0)&&
                            <p className={classes.noMovie}>There Is No Movies</p>
                        }
                        {
                            (results.length > 0 && value.trim().length > 0) &&
                            <SearchItem
                                results={results}
                                type='movie'
                            />
                        }
                    </div>

                </Route>
                <Route path='/Movies/:id' exact>
                    <WatchPage type='movie' />
                </Route>
                <Route path='/Movies/:id/credits' exact>
                    <Credits type='movie' />
                </Route>

            </Switch>
        </Fragment>
    )

}




export default Movies;