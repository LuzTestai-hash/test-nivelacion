import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getComment, getTodo } from '../../redux/actions';

export const IndividualComments = (props) => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment.comment);
  const todo = useSelector((state) => state.todo.todo);
  const { state } = useLocation();
  const { id } = useParams();
  const [result, setResult] = useState({})

  useEffect(() => {
    if (state === 'comments') {
      setResult(comment)
    } else {
      setResult(todo)
    }
  }, [todo, comment, state])


  useEffect(() => {
    const getData = async () => {
      try {
        if (state === 'comments') {
          await dispatch(getComment(id))
        } else {
          await dispatch(getTodo(id))
        }
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [state, dispatch, id])

  return (
    <div className="Container">
      {result ? <div className="card text-center">
        <div className="card-header">
          {result.name ? `NAME: ${result.name}` : `TITLE : ${result.title}`}
        </div>
        <div className="card-body">
          <h5 className="card-title">ID : {result.id}</h5>
          <p className="card-text">{result.body ? `BODY : ${result.body}` : `COMPLETED : ${result.completed + ""}`}</p>
          <button className="btn btn-primary"> {result.postId ? `POST ID : ${result.postId}` : `USER ID : ${result.userId}`}</button>
        </div>
        {result.email ?
          <div className="card-footer text-muted">
            Email : {result.email}
          </div> : null
        }
      </div> : <div className="container">
          <div className="d-flex text-center justify-content-center flex-column align-items-center mt-5 p-5">
            <h3>Loading</h3>
            <div className="spinner-border mt-5" role="status">

              <span className="sr-only"></span>
            </div>
          </div>
        </div>}
    </div>
  );
}