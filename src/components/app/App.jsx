import React from 'react';
import { BrowerRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../../container/LandingPage';
import Header from '../Header/Header';
import ArtistPage from '../../container/ArtistPage';
import ReleasePage from '../../container/ReleasePage';
import LyricsPage from '../../container/LyricsPage';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/artist/:id" component={ArtistPage} />
          <Route path="/release/:id" component={ReleasePage} />
          <Route path="/lyrics/:artist/:title" component={LyricsPage} />
        </Switch>
      </Router>
    </>
  );
}
