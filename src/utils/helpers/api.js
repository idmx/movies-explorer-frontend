export const getResponseData = ( res ) => {
  if ( res.ok ) {
    return res.json();
  }
  return Promise.reject( res.status );
};
