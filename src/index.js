import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import Layout from './components/Layout'
import TvSearch from './components/TvSearch'
import Favorites from './components/Favorites'
import SearchStore from './stores/SearchStore'
import FavoritesStore from './stores/FavoritesStore'


render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={TvSearch}/>
      <Route path='/favorites' component={Favorites}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
