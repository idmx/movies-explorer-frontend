import React,
{
  useState,
  useRef,
  useEffect,
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
import ProtectedRoute from '../ProtectedRoute';
import {
  fetchGetUserInfo, fetchSignIn, fetchSignOut, fetchSignUp,
} from '../../utils/apis';

function App() {
  const [ isShort, setIsShort ] = useState( false );
  const [ isSearch, setIsSearch ] = useState( false );
  const [ isLogin, setIsLogin ] = useState( true );
  const ref = useRef();

  const scroll = () => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

  const handleLogin = ( evt, email, password ) => {
    evt.preventDefault();
    fetchSignIn( email, password )
      .then(( res ) => {
        console.log( res );
        setIsLogin( true );
        localStorage.setItem( 'id', res._id );
      })
      .catch(( err ) => console.log( err ));
  };

  const handleLogout = ( evt ) => {
    evt.preventDefault();
    fetchSignOut()
      .then(() => {
        setIsLogin( false );
        localStorage.removeItem( 'id' );
      })
      .catch(( err ) => console.log( err ));
  };

  const handleRegister = ( evt, email, password, name ) => {
    evt.preventDefault();
    fetchSignUp( email, password, name )
      .then(() => {
        setIsLogin( true );
        localStorage.removeItem( 'id' );
      })
      .catch(( err ) => console.log( err ));
  };

  useEffect(() => {
    localStorage.getItem( 'id' )
      ? fetchGetUserInfo()
        .then(( res ) => {
          setIsLogin( true );
          localStorage.setItem( 'id', res._id );
        })
        .catch(( err ) => console.log( err ))
      : setIsLogin( false );
  }, []);

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
        <ProtectedRoute
          path="/movies"
          isLogin={ isLogin }
        >
          <SearchForm
            isShort={isShort}
            setIsShort={setIsShort}
            setIsSearch={setIsSearch}
          />
          <MoviesCardList
            isShort={isShort}
            isSearch={isSearch}
          />
        </ProtectedRoute>
        <ProtectedRoute
          path="/saved-movies"
          isLogin={ isLogin }
        >
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
        </ProtectedRoute>
        <ProtectedRoute
          path="/profile"
          isLogin={ isLogin }
        >
          <Profile handleLogout={ handleLogout }/>
        </ProtectedRoute>
        <Route path="/sign-in">
          <div className="app__sign">
            <Login
              handleClick={handleLogin}
              isLogin={ isLogin }
            />
          </div>
        </Route>
        <Route path="/sign-up">
          <div className="app__sign">
            <Register
              handleClick={ handleRegister }
              isLogin={ isLogin }
            />
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
