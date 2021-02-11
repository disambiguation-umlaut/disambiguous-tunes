import React from 'react';
import { BrowerRouter as Router, Route, Switch } from 'react-router-dom';
import Artist from '../Artist/Artist';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </Router>
    </>
}
