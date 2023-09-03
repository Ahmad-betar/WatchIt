import { Fragment, useEffect, useState } from "react";
import classes from "./TV.module.css";
import { GetTVProvider } from "./store/GetTV";
import AiringToday from "./AiringToday/AiringToday";
import OnTheAir from "./OnTheAir/OnTheAir";
import Popular from "./Popular/Popular";
import TopRated from "./Top Rated/TopRated";
import Search from "../../UI/Search/Search";
import { Route, Switch } from "react-router-dom";
import WatchPage from "../WatchPage/WatchPage";
import Credits from "../Credits/Credits";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import Seasons from "../Seasons/Seasons";
import Season from "../Season/Season";
import useHttp from "../../Hooks/useHttp";
import { Config, Type } from "../../store/Config";
import SearchItem from "../SearchItems/SearchItems";

const TV = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");

  const { sendRequest } = useHttp();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const setResultsHandler = (data) => {
    setResults(data.results);
  };

  const searchHandler = (data) => {
    setValue(data);
    const d = data.trim().split(" ").join("%20");

    sendRequest(
      {
        ...Config,
        url:
          Config.baseUrl +
          "/search/" +
          Type.tv +
          `?query=${d}&include_adult=false&language=en-US&page=${page}`,
      },
      setResultsHandler
    );
  };

  return (
    <Fragment>
      <Switch>
        <Route path="/tv" exact>
          <div className={classes.media}>
            <div className={classes.shadow}>TV Series</div>
          </div>
          <div className={classes.columnWrapper}>
            <Search onChange={searchHandler} />
            {results.length === 0 && value.trim().length === 0 && (
              <GetTVProvider>
                <Popular />
                <TopRated />
                <AiringToday />
                <OnTheAir />
              </GetTVProvider>
            )}
            {results.length === 0 && value.trim().length > 0 && (
              <p className={classes.noMovie}>There Is No Movies</p>
            )}
            {results.length > 0 && value.trim().length > 0 && (
              <SearchItem results={results} type="tv" />
            )}
          </div>
        </Route>

        <Route path="/tv/:id" exact>
          <WatchPage type="tv" />
        </Route>
        <Route path="/tv/:id/credits" exact>
          <Credits type="tv" />
        </Route>
        <Route path="/tv/:id/seasons" exact>
          <Seasons type="tv" />
        </Route>
        <Route path="/tv/:id/seasons/:seasonId" exact>
          <Season type="tv" />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default TV;
