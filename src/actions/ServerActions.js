import AppDispatcher from '../AppDispatcher'

const ServerActions = {

  sendSearchResults(searchResults) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: { searchResults }
    })
  },

}

export default ServerActions;
