import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DraftPage from './DraftPage/DraftPage.jsx';
import './App.css';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/draft" exact >
          <DraftPage />
        </Route>
        <Route path="/" exact >
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;