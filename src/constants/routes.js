import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Input from '../components/Input/Input';
import Results from '../components/Results/Results';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Input} />
      <Route exact path="/results" component={Results} />
    </Switch>
  </Router>
);

export default Routes;