import AppDispatcher from '../AppDispatcher'

const FavoritesActions = {

  sendFavorite(favorite) {
    AppDispatcher.dispatch({
      type: 'FAVORITE_SENT',
      payload: { favorite }
    })
  },

  removeFavorite(id) {
    AppDispatcher.dispatch({
      type: 'DELETE_FAVORITE',
      payload: { id }
    })
  },

}

export default FavoritesActions;
