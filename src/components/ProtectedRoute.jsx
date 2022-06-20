import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// (isLogin ?? true) спасает от противного промаргивания во время первой загрузки страницы
const ProtectedRoute = ({ isLogin, ...props }) => (
  ( isLogin ?? true )
    ? <Route { ...props }/>
    : <Redirect to="/sign-in"/>
);

export default ProtectedRoute;
