import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './components/home';
import MainLayout from './components/layouts/main-layout';
import RoomsListContainer from './components/containers/rooms-list-container';

export default(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="rooms">
        <IndexRoute component={RoomsListContainer} />
      </Route>

    </Route>
  </Router>
);
