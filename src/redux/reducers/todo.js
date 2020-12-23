import { SET_TODO, SET_TODOS } from "../actionTypes";

const inicialState = {
  todos: [],
  todo: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = inicialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos
      }
    case SET_TODO:
      return {
        ...state,
        todo: action.todo
      }
    default:
      return state;
  }
}