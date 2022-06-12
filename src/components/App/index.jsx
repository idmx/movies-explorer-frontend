import React,
{
  useState,
} from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import './App.css';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from '../MovieCardList';
import Profile from '../Profile';
import Login from '../Login';
import Register from '../Register';
import NotFound from '../NotFound';

function App() {
  const [ isShort, setIsShort ] = useState( false );

  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/movies">
          <SearchForm
            isShort={isShort}
            setIsShort={setIsShort}
          />
          <MoviesCardList isShort={isShort}/>
        </Route>
        <Route path="/saved-movies">
          <SearchForm
            isShort={isShort}
            setIsShort={setIsShort}
          />
          <MoviesCardList isShort={isShort} isSaved={true}/>
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
      <Footer />
    </div>
  );
}

export default App;
