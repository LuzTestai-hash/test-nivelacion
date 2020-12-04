import { useState, useEffect } from 'react';
import { getInformationComments } from '../../utils/api';

import Table from '../../components/TableGlobal/tableGlobal';

export const Comments = () => {
  const [informationComments, setIsInformationComments] = useState([]);

  useEffect(() => {
    getInformationComments().then((res) => {
      setIsInformationComments(res.data)
    })
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
    <div class="container">
      <Table name={"Comments"} information={informationComments} columns={columns} />
    </div >
  );
}