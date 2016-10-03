import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

import Storage from '../Storage'

let _favorites = Storage.read('favorites') || [];

class FavoritesStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      let { type, payload } = action;
      switch (type) {
        case 'FAVORITE_SENT':
        _favorites.push(payload.favorite);
        this.emit('CHANGE');
        break;

        case 'DELETE_FAVORITE':
        _favorites = _favorites.filter( favorite => {
          if (favorite.id === payload.id) {
            return;
          } else {
            return favorite;
          }
        })
        this.emit('CHANGE');
        break;

      }
    });

    this.on('CHANGE', () => {
      Storage.write('favorites', _favorites);
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getFavorites() {
    return _favorites;
  }

}

export default new FavoritesStore();
