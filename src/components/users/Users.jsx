import React, { useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { fetchUsers } from '../../store/actions/actions';
import { connect } from 'react-redux';

import UsersForm from './UserForm';
import UsersList from './UsersList';
import Albums from '../albums/Albums';

import './users.scss';

function Users({fetchUsers}) {
  const { path } = useRouteMatch();
    useEffect(fetchUsers, [fetchUsers]);

  return (
    <Switch>
      <Route path={`${path}/details/:id`}>
        <UsersForm/>
      </Route>
      <Route path={`${path}/:userId/albums`}>
        <Albums/>
      </Route>
      <Route path={path}>
        <UsersList/>
      </Route>
    </Switch>
  )
}

const mapDispatchToProps = {fetchUsers}

export default connect(null, mapDispatchToProps)(Users);
