import React, {Component} from 'react';

import FavoritesStore from '../stores/FavoritesStore';
import FavoritesActions from '../actions/FavoritesActions';

export default class SearchTable extends Component {
  constructor() {
    super();

    this.state = {
      favorites: FavoritesStore.getFavorites()
    }
    this._onChange = this._onChange.bind(this);
    this._removeFavorite = this._removeFavorite.bind(this);
  }

  componentWillMount() {
    FavoritesStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    FavoritesStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      favorites: FavoritesStore.getFavorites()
    })
  }

  _removeFavorite(id) {
    FavoritesActions.removeFavorite(id);
  }

  render() {
    let { favorites } = this.state;

    return (
      <div>
        <h3>Favorites Table</h3>
        <table className="table">
          <thead>
            <tr>
              <th className='tableHeaders'>Show Name</th>
              <th className='tableHeaders'>UnFavorite</th>
            </tr>
          </thead>
          <tbody>
            {
              favorites.map(favorite => (
                <tr key={favorite.id}>
                  <td>{favorite.name}</td>
                  <td><button onClick={() => this._removeFavorite(favorite.id)} className='btn btn-danger'>Remove</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

}
