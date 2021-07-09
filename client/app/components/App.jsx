import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx';
import DraftPage from './DraftPage/DraftPage.jsx';
import SingInPage from './SignInPage/SignInPage.jsx';
// import About from './AboutPage/AboutPage.jsx';
import PageUnavailable from './PageUnavailable/PageUnavailable.jsx';
import UnderConstructions from './UnderConstruction/UnderConstruction.jsx';
import './App.css';


const App = () => {
  return (
    <Router>
      <Switch>

        <Route path="/" exact >
          <HomePage />
        </Route>

        <Route path="/draft-page" exact >
          <DraftPage />
        </Route>

        <Route path="/signin" exact >
          <SingInPage inOrUp='in' />
        </Route>

        <Route path="/signup" exact >
          <SingInPage inOrUp='up' />
        </Route>

        <Route path="/contact" exact >
          <UnderConstructions />
        </Route>

        <Route path="/about" exact >
          <UnderConstructions />
        </Route>

        <Route path="/create-new-room" exact >
          <UnderConstructions />
          {/* <HomePage /> */}
        </Route>

        <Route path="/join-room" exact >
          <UnderConstructions />
          {/* <HomePage /> */}
        </Route>

        <Route path="/" >
          <PageUnavailable />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;