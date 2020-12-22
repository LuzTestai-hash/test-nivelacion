import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table/table';
import { fetchComments } from '../../redux/actions/getPosts';


export const Comments = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.posts.comments);


  useEffect(() => {
    dispatch(fetchComments())
  }, [])

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
      />
    </div >
  );
}

