import React from 'react'
import { Link } from 'react-router-dom';

function UserItem({name, id, url}) {
  return (
    <>
      <li key={id}>
        <span>{name}</span>
        <div className='wrapper'>
          <Link to={`${url}/details/${id}`}>Edit</Link>
          <Link to={`${url}/${id}/albums`}>Albums</Link>
        </div>
      </li>
    </>
  )
}

export default UserItem
