import React, {Component} from 'react';

import SearchStore from '../stores/SearchStore';
import FavoritesActions from '../actions/FavoritesActions';
import TvActions from '../actions/TvActions';

export default class SearchTable extends Component {
  constructor() {
    super();

    this.state = {
      shows: SearchStore.getSearchResults(),
    }
    this._onChange = this._onChange.bind(this);
    this._sendFavorite = this._sendFavorite.bind(this);
    this._removeFavorite = this._removeFavorite.bind(this);
  }

  componentWillMount() {
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      shows: SearchStore.getSearchResults()
    })
  }

  _sendFavorite(show, id) {

    FavoritesActions.sendFavorite(show);
    TvActions.send(id);
  }

  _removeFavorite(id) {
    FavoritesActions.removeFavorite(id);
    TvActions.sendBad(id);
  }

  render() {
    let { shows } = this.state;

    return (
      <div>
        <h3>Shows Table</h3>
        <table className="table">
          <thead>
            <tr>
              <th className='tableHeaders'>Show Name</th>
              <th className='tableHeaders'>Gud or Bad?</th>
            </tr>
          </thead>
          <tbody>
            {
              shows.map(show => (
                <tr key={show.id}>
                  <td>{show.name}</td>
                  <td>
                    <button onClick={() => this._sendFavorite(show, show.id)} type='button' className='btn btn-success' disabled={show.gudDisabled} >Gud</button>
                    <button onClick={() => this._removeFavorite(show.id)} type='button' className='btn btn-danger' disabled={show.badDisabled}>Bad</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

}
