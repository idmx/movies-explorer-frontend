import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isLogin, ...props }) => ( isLogin ? <Route { ...props }/> : <Redirect to="/sign-in"/> );

export default ProtectedRoute;
