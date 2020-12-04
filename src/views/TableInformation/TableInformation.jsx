import { useState, useEffect } from 'react';
import { getInformationTable } from '../../utils/api';


import Table from '../../components/TableGlobal/tableGlobal';

export const TableInformation = () => {
  const [information, setIsInformation] = useState([]);


  useEffect(() => {
    getInformationTable().then((res) => {
      setIsInformation(res.data)
    })
      .catch((err) => console.log(err));
  }, []);


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
    <div class="container">
      <Table name={"Table"} information={information} columns={columns} />
    </div >
  );
}