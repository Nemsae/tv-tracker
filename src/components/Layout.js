import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    let path = this.props.location.pathname;

    return (
      <div className='container'>
        <h1 className='text-center'>Tv Favs</h1>

        <ul className="nav nav-tabs">
          <li role="presentation" className={classNames({ active: path === '/'})}>
            <Link to='/'>TV Search</Link>
          </li>
          <li role="presentation" className={classNames({ active: path === '/favorites'})}>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>

        {this.props.children}

      </div>
    )
  }
}
