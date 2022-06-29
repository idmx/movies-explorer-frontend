import { api, API_MOVIES_URL } from '../constants/api';
import { getResponseData } from '../helpers/api';

export const fetchAllMovies = () => fetch( `${API_MOVIES_URL}/beatfilm-movies`, {
  headers: api.headers,
})
  .then(( res ) => getResponseData( res ));
