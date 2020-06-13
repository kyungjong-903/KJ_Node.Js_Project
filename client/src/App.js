import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/landingPage'
import LoginPage from './components/views/loginPage/loginPage'
import RegisterPage from './components/views/registerPage/registerPage'
import NavBar from './components/views/navBar/navBar'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/register" component={RegisterPage} />
        
        <Route exact path="/navbar" component={NavBar} />
      </Switch>
    </Router>  
  );
}

export default App;
