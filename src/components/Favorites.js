import React, { Component } from 'react'

import FavoritesTable from '../components/FavoritesTable'

export default class Favorites extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='text-center'>
        <h1>Your Favorite Shows</h1>
        <div>
          <FavoritesTable />
        </div>
      </div>
    )
  }
}
