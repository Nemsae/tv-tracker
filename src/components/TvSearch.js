import React, { Component } from 'react'

import TvActions from '../actions/TvActions'
import SearchTable from '../components/SearchTable'
import SearchForm from '../components/SearchForm'


export default class TvSearch extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='text-center'>
        <h1>Search by Show Name</h1>
        <div className="row">
          <SearchForm />
        </div>
        <div className="row">
          <SearchTable />
        </div>
      </div>
    )
  }
}
