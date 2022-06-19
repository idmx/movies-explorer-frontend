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
