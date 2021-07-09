import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx';
import DraftPage from './DraftPage/DraftPage.jsx';
import SingInPage from './SignInPage/SignInPage.jsx';
// import About from './AboutPage/AboutPage.jsx';
import PageUnavailable from './PageUnavailable/PageUnavailable.jsx';
import UnderConstructions from './UnderConstruction/UnderConstruction.jsx';
import './App.css';

<<<<<<< HEAD
const socket = io('http://ec2-54-193-123-166.us-west-1.compute.amazonaws.com', { autoConnect: false });
=======
>>>>>>> 584c1a86ba5760cebdbdfb4126395c7b49f8e3c5

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