import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';


import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';

export default function Comments() {
  const [informationComments, setIsInformationComments] = useState([]);

  const getInformation = async () => {
    try {
      const data = await axios.get(config.API_COMMENTS_URL);
      setIsInformationComments(data.data)
    } catch (e) {
      console.log(e)
    }
  }
  console.log(informationComments)
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
  useEffect(() => {
    getInformation();
  }, []);


  return (
    <div>
      <div className="container mt-5 mb-5">
        <div class="d-flex justify-content-center">
          <h1 style={{ color: "blue", border: " 1px solid blue", padding: '1rem', width: '100%', backgroundColor: "rgb(154 170 241)", textAlign: 'center' }}>Comments</h1>
        </div>
        <BootstrapTable
          keyField="name"
          data={informationComments}
          columns={columns}
          pagination={paginationFactory()} />
      </div>
    </div >
  );
}