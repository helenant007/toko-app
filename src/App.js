import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import ShopPage from './Routes/ShopPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route render={() => <ShopPage />} path="/my-shop" />
        <Redirect exact from="*" to="/my-shop" />
      </Switch>
    </Router>
  );
}

export default App;
