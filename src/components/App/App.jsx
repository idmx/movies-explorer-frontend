import {
  Switch,
  Route
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NavTab from '../Main/NavTab/NavTab';
import Footer from '../Footer/Footer';
import './App.css';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MovieCardList/MoviesCardList';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path="/" exact>
          <Header>
            <NavTab />
          </Header>
          <Main />
        </Route>
        <Route path="/movies">
          <Header>
            <Navigation />
          </Header>
          <SearchForm />
          <MoviesCardList />
        </Route>
        <Route path="/movies">

        </Route>
        <Route path="/saved-movies">

        </Route>
        <Route path="/profile">

        </Route>
        <Route path="/signin">

        </Route>
        <Route path="/signup">

        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
