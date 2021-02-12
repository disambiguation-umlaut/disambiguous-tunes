/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from '../../container/LandingPage';
import ArtistPage from '../../container/ArtistPage';
import ReleasePage from '../../container/ReleasePage';
import LyricsPage from '../../container/LyricsPage';

export default function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"
            component={LandingPage} 
          />
          <Route path="/artist/:name/:id" 
            component={ArtistPage} 
          />
          <Route path="/release/:name/:id" 
            component={ReleasePage} 
          />
          <Route path="/lyrics/:artist/:title" 
            component={LyricsPage} 
          />
        </Switch>
      </Router>
    </>
  );
}
