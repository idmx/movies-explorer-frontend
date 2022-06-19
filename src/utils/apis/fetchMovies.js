import { api, API_BASE_URL } from '../constants/api';
import { getResponseData } from '../helpers/api';

export const fetchGetSavedMovies = () => fetch( `${API_BASE_URL}/movies`, {
  headers: api.headers,
  credentials: api.credentials,
})
  .then(( res ) => getResponseData( res ));

export const fetchSetSavedMovie = ( body ) => fetch( `${API_BASE_URL}/movies`, {
  method: 'POST',
  headers: api.headers,
  credentials: api.credentials,
  body,
})
  .then(( res ) => getResponseData( res ));

export const fetchRemoveSavedMovie = ( moviesId ) => fetch( `${API_BASE_URL}/movies/${moviesId}`, {
  method: 'DELETE',
  headers: api.headers,
  credentials: api.credentials,
})
  .then(( res ) => getResponseData( res ));
