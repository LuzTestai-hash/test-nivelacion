import api from './api';

const commentsService = {};

commentsService.getInfo = function () {
  return api.get('/comments')
    .then((res) => res.data)
}

export default commentsService