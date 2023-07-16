import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import TV from './components/TV/TV';
import Person from './components/Person/Person';
import People from './components/People/People';

function App() {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });



  return (
    <Fragment>
      <Header />

      <Switch>
        <Route path='/' exact>
          <Redirect to='/Home' />
        </Route>

        <Route path='/Home' exact>
          <Home />
        </Route>
        <Route path='/Movies'>
          <Movies />
        </Route>
        <Route path='/tv' component={<TV/>}>
          <Route path={'/'} />
        </Route>
        <Route path='/Actors'>
          <People/>
        </Route>
        {/* {isLogin && <Route path='/Account' > */}
        {/* <Account /> */}
        {/* </Route>} */}
        {/* <Route path='*'> */}
        {/* <p>this page doesn't found</p> */}
        {/* </Route> */}
      </Switch>
      <Footer />


    </Fragment>

  );
}

export default App;
