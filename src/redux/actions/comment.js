import { SET_COMMENT, SET_COMMENTS } from "../actionTypes";
import commentService from '../../services/comment'

export const getComments = () => async (dispatch) => {
  const comments = await commentService.getComments()
  dispatch({
    type: SET_COMMENTS,
    payload: comments
  })
}

export const getComment = (id) => async (dispatch) => {
  const comment = await commentService.getCommentById(id)
  dispatch({
    type: SET_COMMENT,
    payload: comment
  })
}