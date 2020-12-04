import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';


import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';

export default function TableInformation() {
  const [information, setIsInformation] = useState([]);

  const getInformation = async () => {
    try {
      const data = await axios.get(config.API_URL);
      setIsInformation(data.data)
    } catch (e) {
      console.log(e)
    }
  }
  console.log(information)
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
  useEffect(() => {
    getInformation();
  }, []);


  return (
    <div>
      <div className="container mt-5 mb-5">
        <div class="d-flex justify-content-center">
          <h1 style={{ color: "#1dd81a", border: " 1px solid #1dd81a", padding: '1rem', width: '100%', backgroundColor: "#c0ffc4", textAlign: 'center' }}>Table</h1>
        </div>
        <BootstrapTable
          keyField="name"
          data={information}
          columns={columns}
          pagination={paginationFactory()} />
      </div>
    </div >
  );
}