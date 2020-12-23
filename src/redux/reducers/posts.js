import { ALL_COMMENTS, ALL_TODOS, POST_INDIVIDUAL } from "../constantes";

const inicialState = {
  comments: [],
  todos: [],
  post: {},

};

const posts = (state = inicialState, action) => {
  switch (action.type) {
    case ALL_COMMENTS:
      return { ...state, comments: action.comments };
    case ALL_TODOS:
      return { ...state, todos: action.todos };
    case POST_INDIVIDUAL:
      return { ...state, post: action.post };
    default:
      return state;
  }
};

export default posts;