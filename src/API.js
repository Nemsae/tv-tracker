import { get } from 'axios'
import uuid from 'uuid'

import ServerActions from './actions/ServerActions'

const API = {
  receiveTvSearch(userInput) {
    get(`http://api.tvmaze.com/search/shows?q=${userInput}`)
    .then( response => {
        let searchResults = response.data.map( tv => {

          let obj = {
            name: tv.show.name,
            id: uuid(),
            gudDisabled: false,
            badDisabled: false,
          }

          return obj;
        })

      ServerActions.sendSearchResults(searchResults);

    })
    .catch( err => {
      console.log('Error!',err);
    })
  },

}

export default API;
