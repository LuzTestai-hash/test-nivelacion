import { SET_COMMENT, SET_COMMENTS } from "../actionTypes";

const inicialState = {
  comments: [],
  comment: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = inicialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case SET_COMMENT:
      return {
        ...state,
        comment: action.payload
      }
    default:
      return state;
  }
}