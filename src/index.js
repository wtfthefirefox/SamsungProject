import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/header';
import App from "./components/app";
import AboutPage from './components/aboutPage';

import '../assets/scss/index.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Header />
      {/* <Route path="/" component={Header}/> */}
      <Route exact path="/" component={App}/>
      <Route path="/about/" component={AboutPage}/>
    </Switch>
  </Router>, 
  document.querySelector("#root")
);