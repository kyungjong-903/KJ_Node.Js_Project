import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/landingPage'
import LoginPage from './components/views/loginPage/loginPage'
import RegisterPage from './components/views/registerPage/registerPage'
import Auth from './hoc/auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Auth(LandingPage, null )} />

        <Route exact path="/login" component={ Auth(LoginPage, false)} />

        <Route exact path="/register" component={ Auth(RegisterPage, false)} />
        
      </Switch>
    </Router>  
  );
}

export default App;
