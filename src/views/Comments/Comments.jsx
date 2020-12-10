import { useState, useEffect } from 'react';
import commentsService from '../../services/comments';

import Table from '../../components/Table/table';

export const Comments = () => {
  const [informationComments, setIsInformationComments] = useState([]);

  useEffect(() => {
    commentsService.getInfo()
      .then((res) => setIsInformationComments(res))
      .catch((err) => console.log(err));
  }, []);


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
      <Table name={"Comments"} information={informationComments} columns={columns} />
    </div >
  );
}