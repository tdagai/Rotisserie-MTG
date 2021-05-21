import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DraftPage from './DraftPage/DraftPage.jsx';
import SingInPage from './SignInPage/SignInPage.jsx';
import PageUnavailable from './PageUnavailable/PageUnavailable.jsx';
import './App.css';


const App = () => {
  return (
    <Router>
      <Switch>

        <Route path="/" exact >
          <div>Home</div>
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

        <Route path="/" >
          <PageUnavailable />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;