import api from './api'

const commentService = {}

commentService.getComments = function () {
  return api.get('/comments')
    .then(res => res.data)
    .catch(err => { throw err })
}

commentService.getCommentById = function (id) {
  return api.get(`/comments/${id}`)
    .then(res => res.data)
    .catch(err => { throw err })
}

export default commentService