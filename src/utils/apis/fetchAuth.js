import { api, API_BASE_URL } from '../constants/api';
import { getResponseData } from '../helpers/api';

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
