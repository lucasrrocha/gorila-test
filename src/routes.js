import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/home" component={Home} />
      </Router>
    </AuthProvider>
  );
}

export default Routes;
