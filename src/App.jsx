import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Login from './views/Auth/Login';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </Layout>
      </Router>
    </AuthProvider>
  );
}
