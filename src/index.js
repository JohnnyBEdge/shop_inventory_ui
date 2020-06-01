import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './pages/Main';
import Nav from './components/Nav';
import ItemPage from './components/ItemPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import InventoryManagement from './pages/InventoryManagement';
import Inventory from './pages/Inventory';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
      <Nav />
      {/* <Main /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
