import React from 'react'
import { Link } from 'react-router-dom';

function AlbumItem({title, id, url}) {
  return (
    <>
      <li key={id}>
        <span>Album: {id}</span>
        <Link to={`${url}/${id}`}>{title}</Link>
      </li>
    </>
  )
}


export default AlbumItem
