import React,
{
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
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
  fetchGetUserInfo, fetchSignIn, fetchSignOut, fetchSignUp, fetchUpdateUserInfo,
} from '../../utils/apis';
import { UserContext } from '../../contexts/UserContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import ErrorModal from '../ErrorModal';

function App() {
  const [ isShort, setIsShort ] = useState( false );
  const [ isSearch, setIsSearch ] = useState( false );
  const [ isLogin, setIsLogin ] = useState( null );
  const [ searchText, setSearchText ] = useState( '' );
  const [ user, setUser ] = useState( '' );
  const [ error, setError ] = useState( '' );

  const ref = useRef();
  const location = useLocation();
  const history = useHistory();

  const scroll = () => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

  const errorHandler = ( err ) => {
    console.log( err );
    err.statusCode
      ? setError( 'Что-то пошло не так, попробуйте еще раз!' )
      : setError( err.message );
  };

  const login = ( email, password ) => {
    fetchSignIn( email, password )
      .then(( res ) => {
        setIsLogin( true );
        localStorage.setItem( 'id', res._id );
        history.push( '/movies' );
      })
      .catch(( err ) => {
        errorHandler( err );
      });
  };

  const handleLogin = ( email, password ) => {
    login( email, password );
  };

  const handleLogout = ( evt ) => {
    evt.preventDefault();
    fetchSignOut()
      .then(() => {
        setIsLogin( false );
        localStorage.removeItem( 'id' );
      })
      .catch(( err ) => {
        errorHandler( err );
      });
  };

  const handleRegister = ( email, password, name ) => {
    fetchSignUp( email, password, name )
      .then(() => {
        login( email, password );
      })
      .catch(( err ) => {
        errorHandler( err );
      });
  };

  const handleUpdateUser = ( name, email ) => {
    fetchUpdateUserInfo( name, email )
      .then(
        fetchGetUserInfo()
          .then(() => {
            setUser({ name, email });
          })
          .catch(( err ) => errorHandler( err )),
      )
      .catch(( err ) => {
        errorHandler( err );
      });
  };

  useEffect(() => {
    const path = location.pathname;
    if ( localStorage.getItem( 'id' )) {
      fetchGetUserInfo()
        .then(( res ) => {
          setIsLogin( true );
          localStorage.setItem( 'id', res._id );
          history.push( path );
          setUser({ name: res.name, email: res.email });
        })
        .catch(( err ) => errorHandler( err ));
    } else {
      setIsLogin( false );
    }
  }, []);

  return (
    <div className='app'>
      <ErrorContext.Provider value={{ errorHandler }}>
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
        <ProtectedRoute
          path="/movies"
          isLogin={ isLogin }
        >
          <SearchForm
            isShort={isShort}
            setIsShort={setIsShort}
            searchText={searchText}
            setSearchText={setSearchText}
            handleSearch={() => setIsSearch( true )}
          />
          <MoviesCardList
            isShort={isShort}
            searchText={searchText}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
          />
        </ProtectedRoute>
        <ProtectedRoute
          path="/saved-movies"
          isLogin={ isLogin }
        >
          <SearchForm
            isShort={isShort}
            setIsShort={setIsShort}
            searchText={searchText}
            setSearchText={setSearchText}
            handleSearch={() => setIsSearch( true )}
          />
          <MoviesCardList
            isShort={isShort}
            isSaved={true}
            searchText={searchText}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
          />
        </ProtectedRoute>
        <ProtectedRoute
          path="/profile"
          isLogin={ isLogin }
        >
          <UserContext.Provider value={ user } >
            <Profile
              handleLogout={ handleLogout }
              handleUpdateUser={ handleUpdateUser }
            />
          </UserContext.Provider>
        </ProtectedRoute>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      </Main>
      <Footer />
      <ErrorModal error={error} setError={setError}/>
      </ErrorContext.Provider>
    </div>
  );
}

export default App;
