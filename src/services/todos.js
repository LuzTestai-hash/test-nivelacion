import api from './api';

const todosService = {};


todosService.getInfo = function () {
  return api.get('/todos')
    .then((res) => res.data)
}


export default todosService;