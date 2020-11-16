import { ALBUMS_SET_LIST } from "../actions/actions";

const initialState = {
  list:[]
}

export default function(state = initialState, {type, payload}) {
  switch(type){
    case ALBUMS_SET_LIST: return {...state, list:payload}
    default: return state;
  }
}