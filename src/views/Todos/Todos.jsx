import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../redux/actions/getPosts';
import Table from '../../components/Table/table';

export const Todos = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.posts.todos);


  useEffect(() => {
    const getTodos = async () => {
      try {
        await dispatch(fetchTodos())
      } catch (err) {
        console.log(err)
      }
    }
    getTodos()
  }, [dispatch])



  const columns = [
    {
      dataField: "userId", text: "userId"
    },
    {
      dataField: "id", text: "id"
    },
    {
      dataField: "title", text: "title"
    },
    {
      dataField: "completed", text: "completed"
    }
  ]


  return (
    <div className="container">
      <Table
        title={"Todos"}
        columns={columns}
        information={result} />
    </div>
  );
}