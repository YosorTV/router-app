import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import UserItem from './UserItem'

function UsersList({ list }) {
  const { url, path } = useRouteMatch();
  return (
    <ul className='users'>
      {list.map(({name, id}) => {
        return (
          <UserItem 
            key={id}
            id={id}
            url={url}
            name={name}  
          />
        )}
      )}
      <Link className="addUser" to={`${path}/details/0`}>Add User</Link>
    </ul>
  )
}

const mapStateToProps = ({ users: { list }}) => ({list});

export default connect(mapStateToProps, null)(UsersList)
