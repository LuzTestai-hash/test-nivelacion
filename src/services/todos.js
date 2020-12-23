import api from './api'

const todosService = {}

todosService.getTodos = function () {
  return api.get('/todos')
    .then(res => res.data)
    .catch(err => { throw err })
}

todosService.getTodoById = function (id) {
  return api.get(`/todos/${id}`)
    .then(res => res.data)
    .catch(err => { throw err })
}

export default todosService