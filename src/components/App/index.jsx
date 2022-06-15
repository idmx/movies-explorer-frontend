import React,
{
  useState,
  useRef,
} from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from '../MovieCardList';
import Profile from '../Profile';
import Login from '../Login';
import Register from '../Register';
import NotFound from '../NotFound';
import Promo from '../Promo';
import AboutProject from '../AboutProject';
import Techs from '../Techs';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import './App.css';

function App() {
  const [ isShort, setIsShort ] = useState( false );
  const [ isSearch, setIsSearch ] = useState( false );
  const ref = useRef();

  const scroll = () => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

  return (
    <div className='app'>
      <Header />
      <Main>
      <Switch>
        <Route path="/" exact>
          <Promo scroll={scroll}/>
          <AboutProject ref={ref}/>
          <Techs />
          <AboutMe />
          <Portfolio />
        </Route>
        <Route path="/movies">
          <SearchForm
            isShort={isShort}
            setIsShort={setIsShort}
            setIsSearch={setIsSearch}
          />
          <MoviesCardList
            isShort={isShort}
            isSearch={isSearch}
          />
        </Route>
        <Route path="/saved-movies">
          <SearchForm
            isShort={isShort}
            setIsShort={setIsShort}
            setIsSearch={setIsSearch}
          />
          <MoviesCardList
            isShort={isShort}
            isSaved={true}
            isSearch={isSearch}
          />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/sign-in">
          <div className="app__sign">
            <Login />
          </div>
        </Route>
        <Route path="/sign-up">
          <div className="app__sign">
            <Register />
          </div>
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
