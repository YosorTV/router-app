import React from 'react'
import './header.scss';
import {NavLink} from 'react-router-dom'

function header() {
  return (
    <header>
      <nav>
      <ul>
        <li><NavLink to="/albums">Albums</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </ul>
      </nav>
    </header>
  )
}

export default header
