import React from 'react'
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';

import AlbumItem from './AlbumItem';

const AlbumsList = ({ list }) => {
  const { url } = useRouteMatch();
  return (
    <ul className="albums">
      { list.map(({ title, id }) => {
        return (
          <AlbumItem 
            key={id} 
            id={id}
            url={url} 
            title={title}
          /> 
        )}
      )}
    </ul>
  )
}

const mapStateToProps = ({ albums: { list }}) => ({list});

export default connect(mapStateToProps, null)(AlbumsList)
