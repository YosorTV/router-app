import api from '../../api';

const actionTypeCreator = type => payload => ({type, payload});
const list = [];
// get albums
export const ALBUMS_SET_LIST = "ALBUMS_SET_LIST";
  const getAlbumsAction = actionTypeCreator(ALBUMS_SET_LIST);
export const fetchAlbums = userId => async dispatch => {
  dispatch(getAlbumsAction, list);
  const { data } = await api.get('albums' + (userId ? `?userId=${userId}` : ' '));
    return dispatch(getAlbumsAction(data));
}
// get users
export const USERS_SET_LIST = "USERS_SET_LIST";
  const getUsersAction = actionTypeCreator(USERS_SET_LIST);
export const fetchUsers = () => async dispatch => {
  const {data} = await api.get('users');
    return dispatch(getUsersAction(data));
}
// get photos
export const PHOTOS_SET_LIST = "PHOTOS_SET_LIST";
  const getCurrentPhotosAction = actionTypeCreator(PHOTOS_SET_LIST);
export const fetchPhotos = albumId => async dispatch => {
  dispatch(getCurrentPhotosAction, list);
    const { data } = await api.get(`photos?albumId=${albumId}`);
      return dispatch(getCurrentPhotosAction(data));
}

// update user
export const USERS_UPDATE_ITEM = 'USERS_UPDATE_ITEM';
  const updateUserAction = actionTypeCreator(USERS_UPDATE_ITEM);
  const updateUser = async (user, dispatch) => {
  const { data } = await api.put(`users/${user.id}`, user);
    return dispatch(updateUserAction(data));
}
// add user
export const USERS_ADD_ITEM = 'USERS_ADD_ITEM';
  const addUserAction = actionTypeCreator(USERS_ADD_ITEM);
  const addUser = async (user, dispatch) => {
  const { data } = await api.post(`users`, user);
    return dispatch(addUserAction(data));
}
// delete user
export const USERS_DELETE_ITEM = 'USERS_DELETE_ITEM';
  const delteUserAction = actionTypeCreator(USERS_DELETE_ITEM);
export const deleteUser = user => dispatch => {
  dispatch(delteUserAction(user));
    api.delete(`users/${user}`);
}
// save user
export const saveUser = user => dispatch => {
  user.id 
    ? updateUser(user, dispatch)
    : addUser(user, dispatch)
}
