import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table/table';
import { getComments } from '../../redux/actions';


export const Comments = (props) => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.comment.comments);


  useEffect(() => {
    const setComments = async () => {
      try {
        await dispatch(getComments())
      } catch (err) {
        console.log(err)
      }
    }
    setComments()
  }, [dispatch])

  const columns = [
    {
      dataField: "postId", text: "postId"
    },
    {
      dataField: "id", text: "id"
    },
    {
      dataField: "name", text: "name"
    },
    {
      dataField: "email", text: "email"
    },
    {
      dataField: "body", text: "body"
    }

  ]
  return (
    <div className="container">
      <Table
        title={"Comments"}
        columns={columns}
        information={result}
        {...props}
      />
    </div>
  );
}

