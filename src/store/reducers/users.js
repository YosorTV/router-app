import { USERS_SET_LIST, USERS_UPDATE_ITEM, USERS_ADD_ITEM, USERS_DELETE_ITEM } from "../actions/actions";

const initialState = {
  list:[]
}

export default function(state = initialState, {type, payload}) {
  switch(type){
    case USERS_SET_LIST: return {...state, list:payload}
    case USERS_ADD_ITEM: return {...state, list:[...state.list, payload]}
    case USERS_UPDATE_ITEM: return {...state, list:state.list.map(item => item.id != payload.id ? item : payload)}
    case USERS_DELETE_ITEM: return {...state, list:state.list.filter(item => item.id != payload.id)}
  default: return state;
  }
}