import { ALL_COMMENTS, POST_INDIVIDUAL, ALL_TODOS } from "../constantes";
import config from '../../services/config'
import axios from "axios";


const allComments = comments => ({
  type: ALL_COMMENTS,
  comments
});

const allTodos = todos => ({
  type: ALL_TODOS,
  todos
});

const postIndividual = post => ({
  type: POST_INDIVIDUAL,
  post
});

export const fetchComments = () => dispatch =>
  axios
    .get(`${config.apiURL}/comments`)
    .then(res => res.data)
    .then(comments => dispatch(allComments(comments)));

export const fetchPostComments = id => dispatch =>
  axios
    .get(`${config.apiURL}/comments/${id}`)
    .then(res => res.data)
    .then(post => dispatch(postIndividual(post)));

export const fetchTodos = () => dispatch =>
  axios
    .get(`${config.apiURL}/todos`)
    .then(res => res.data)
    .then(todos => dispatch(allTodos(todos)));


export const fetchPostTodos = id => dispatch =>
  axios
    .get(`${config.apiURL}/todos/${id}`)
    .then(res => res.data)
    .then(post => dispatch(postIndividual(post)));
