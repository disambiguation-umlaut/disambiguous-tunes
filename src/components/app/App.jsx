/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import SearchPage from '../../container/SearchPage';
import ArtistPage from '../../container/ArtistPage';
import ReleasePage from '../../container/ReleasePage';
import LyricsPage from '../../container/LyricsPage';
import HomePage from '../../container/HomePage';

export default function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" 
            component={HomePage} 
          />
          <Route path="/landing"
            component={SearchPage} 
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
