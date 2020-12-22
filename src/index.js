import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Products from './components/Products';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about-us">
          <AboutUs/>
        </Route>
        <Route exact path="/products">
          <Products/>
        </Route>
        <Route exact path="/careers">
          <Careers/>
        </Route>
        <Route exact path="/contact-us">
          <ContactUs/>
        </Route>
      </Switch>
      <Navbar/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
