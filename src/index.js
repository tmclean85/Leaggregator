import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Layout from './components/Layout';
import Routes from './constants/routes';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <Layout>
      <Routes />
    </Layout> 
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
