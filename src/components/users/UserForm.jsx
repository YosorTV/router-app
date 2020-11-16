import React from 'react'

import {connect} from 'react-redux';
import {useHistory, withRouter} from 'react-router-dom';

import { Formik, Form, Field } from 'formik';
import { deleteUser, saveUser } from '../../store/actions/actions';

const USER_TEMPLATE = {
  name: ''
}

function UsersForm({ currentUser, saveUser, deleteUser }) {
  const { goBack } = useHistory();
  
  const onFormikSubmit = values => {
    saveUser(values);
    goBack();
  }

  const onFormikDelete = () => {
    deleteUser(currentUser);
    goBack()
  }

  return (
    <>
      <Formik initialValues={currentUser} onSubmit={onFormikSubmit}>
        <Form className="formik">
          <div className="wrapperInput">
            <label htmlFor="name">Name: </label>
            <Field name="name"/>
          </div>
          <div className="btnWrapper">
            <button type="submit">Save</button>
            <button type="button" onClick={onFormikDelete}>Delete</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

const mapStateToProps = ({users: {list}}, {match: {params: {id}}}) => {
  const currentUser = list.find(user => user.id == id);
    return {currentUser: currentUser ? currentUser : USER_TEMPLATE}
}

const mapDispatchToProps = {
  saveUser,
  deleteUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersForm));
