import { API_BASE_URL, api } from '../constants/api';
import { getResponseData } from '../helpers/api';

export const fetchGetUserInfo = () => fetch( `${API_BASE_URL}/users/me`, {
  headers: api.headers,
  credentials: api.credentials,
})
  .then(( res ) => getResponseData( res ));

export const fetchUpdateUserInfo = ( name, email ) => fetch( `${API_BASE_URL}/users/me`, {
  method: 'PATCH',
  headers: api.headers,
  credentials: api.credentials,
  body: JSON.stringify({
    name,
    email,
  }),
})
  .then(( res ) => getResponseData( res ));

export const fetchSignIn = ( email, password ) => fetch( `${API_BASE_URL}/signin`, {
  method: 'POST',
  headers: api.headers,
  credentials: api.credentials,
  body: JSON.stringify({
    email,
    password,
  }),
})
  .then(( res ) => getResponseData( res ));

export const fetchSignUp = ( email, password, name ) => fetch( `${API_BASE_URL}/signup`, {
  method: 'POST',
  headers: api.headers,
  credentials: api.credentials,
  body: JSON.stringify({
    email,
    password,
    name,
  }),
})
  .then(( res ) => getResponseData( res ));

export const fetchSignOut = () => fetch( `${API_BASE_URL}/signout`, {
  method: 'POST',
  headers: api.headers,
  credentials: api.credentials,
})
  .then(( res ) => getResponseData( res ));

export const fetchGetSavedMovies = () => fetch( `${API_BASE_URL}/movies`, {
  headers: api.headers,
  credentials: api.credentials,
})
  .then(( res ) => getResponseData( res ));

export const fetchSetSavedMovie = ( body ) => fetch( `${API_BASE_URL}/movies`, {
  method: 'POST',
  headers: api.headers,
  credentials: api.credentials,
  body: JSON.stringify( body ),
})
  .then(( res ) => getResponseData( res ))
  .catch(() => console.log( body ));

export const fetchRemoveSavedMovie = ( moviesId ) => fetch( `${API_BASE_URL}/movies/${moviesId}`, {
  method: 'DELETE',
  headers: api.headers,
  credentials: api.credentials,
})
  .then(( res ) => getResponseData( res ));
