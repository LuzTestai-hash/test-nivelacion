import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../redux/actions';
import Table from '../../components/Table/table';

export const Todos = (props) => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.todo.todos);


  useEffect(() => {
    const setTodos = async () => {
      try {
        await dispatch(getTodos())
      } catch (err) {
        console.log(err)
      }
    }
    setTodos()
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
        information={result}
        {...props}
      />
    </div>
  );
}