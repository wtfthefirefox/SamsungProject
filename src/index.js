import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/header';
import App from "./components/app";
import AboutPage from './components/aboutPage';
import DescriptonItem from './components/descriptionItem';

import '../assets/scss/index.scss';

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/about/" component={AboutPage}/>
      <Route path="/item/" component={DescriptonItem}/>
    </Switch>
  </Router>, 
  document.querySelector("#root")
);