import React, { useEffect } from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

import AlbumsList from './AlbumsList';
import AlbumsPhoto from './AlbumsPhotos';

import './albums.scss';
import { fetchAlbums } from '../../store/actions/actions';
import { connect } from 'react-redux';

const Albums = ({fetchAlbums}) => { 
  const { path } = useRouteMatch();
  const { userId } = useParams();

  useEffect(() => fetchAlbums(userId), [userId, fetchAlbums]);

  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <AlbumsPhoto/>
      </Route>
      <Route path={path}>
        <AlbumsList/>
      </Route>
    </Switch>
  )
}

const mapDispatchToProps = {fetchAlbums}

export default connect(null, mapDispatchToProps)(Albums);
