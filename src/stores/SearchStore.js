import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _tvShowResults = [];

class SearchStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      let { type, payload } = action;
      switch (type) {
        case 'RECEIVE_SEARCH_RESULTS':
        _tvShowResults = payload.searchResults;
        this.emit('CHANGE');
        break;

        case 'UPDATE_SHOW':
        _tvShowResults = _tvShowResults.filter( show => {
          if (payload.id === show.id) {
            show.gudDisabled = true;
            show.badDisabled = false;
            return show;
          } else {
            return show;
          }
        })
        this.emit('CHANGE');
        break;

        case 'UPDATE_SHOW_BAD':
        _tvShowResults = _tvShowResults.filter( show => {
          if (payload.id === show.id) {
            show.badDisabled = true;
            show.gudDisabled = false;
            return show;
          } else {
            return show;
          }
        })
        this.emit('CHANGE');
        break;

      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getSearchResults() {
    return _tvShowResults;
  }

}

export default new SearchStore();
