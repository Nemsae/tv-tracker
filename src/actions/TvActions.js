import API from '../API'
import AppDispatcher from '../AppDispatcher'

const GifActions = {

  fetchTvSearch(userInput) {
    API.receiveTvSearch(userInput);
  },

  send(id) {
    AppDispatcher.dispatch({
      type: 'UPDATE_SHOW',
      payload: { id }
    })
  },

  sendBad(id) {
    AppDispatcher.dispatch({
      type: 'UPDATE_SHOW_BAD',
      payload: { id }
    })
  },

}

export default GifActions;
