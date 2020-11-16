import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchPhotos } from '../../store/actions/actions';

const AlbumsPhotos = ({list, fetchPhotos}) => {
  const {id} = useParams();
    useEffect(() => fetchPhotos(id), [fetchPhotos, id])
  return (
    <div className="photos">
      {list.map(({id, thumbnailUrl}) => (
        <figure key={id}>
          <img src={thumbnailUrl} alt="photos"/>
        </figure>
      ))}
    </div>
  )
}

const mapStateToProps = ({photos: {list}}) => ({list});
const mapDispatchToProps = {fetchPhotos}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPhotos)
