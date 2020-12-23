import { useState, useEffect } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useHistory } from 'react-router-dom';


export default function TableInformation({ columns, title, information }) {

  const [name, setName] = useState(columns[0].dataField);
  const [filterData, setFilterData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setFilterData(information)
  }, [information])

  const handlefilterData = (search) => {
    if (!search) {
      setFilterData(information)
    } else {
      const _filterData = information.filter(data => {
        if (typeof data[name] === 'number') return data[name] === parseInt(search)
        if (typeof data[name] === 'string') {
          return data[name].replace(/\n|\r/g, " ").toLowerCase().includes(search.toLowerCase())
        }
        if (typeof data[name] === 'boolean') return data[name].toString().toLowerCase() === search.toLowerCase()
        return null;
      })
      console.log("filterData:", _filterData)
      setFilterData(_filterData)
    }
  }
  const rowEvents = {
    onClick: (e, row) => {
      information[0].userId ? history.push({ state: "todos", pathname: `/todos/${row.id}` }) : history.push({ state: "comments", pathname: `/comments/${row.id}` })
    }
  }
  return (
    <div className="container mt-5 mb-5">
      {information
        ? <div>
          <div className="row mt-5">
            <div className="col-6">
              <select className="custom-select p-2" name="search" id="search" onChange={(e) => setName(e.target.value)} >
                {columns.map((title, index) => {
                  return (<option key={index} value={title.dataField}>{title.dataField}</option>)
                })}
              </select>

            </div>
            <div className="col-6">
              <div className="d-flex">
                <input className="form-control" type="textarea" name="exact" onChange={(e) => handlefilterData(e.target.value)}></input>
              </div>
            </div>
          </div>


          <div className="d-flex justify-content-center mt-5">
            <h1 style={{ color: "#1dd81a", border: " 1px solid #1dd81a", padding: '1rem', width: '100%', backgroundColor: "#c0ffc4", textAlign: 'center' }}>{title}</h1>
          </div>
          <BootstrapTable
            hover
            keyField="id"
            data={filterData}
            columns={columns}
            pagination={paginationFactory()}
            rowEvents={rowEvents} />

        </div>
        : <div class="container">
          <div class="d-flex text-center justify-content-center flex-column align-items-center mt-5 p-5">
            <h3>Loading</h3>
            <div class="spinner-border mt-5" role="status">

              <span class="sr-only"></span>
            </div>
          </div>
        </div>}
    </div>
  );
}





