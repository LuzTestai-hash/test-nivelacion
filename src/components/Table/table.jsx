import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useEffect, useState } from 'react';
var arr = []


export default function TableInformation({ information, filtrados, columns, title, searchForName, search, showInput, setContent, name }) {

  return (
    <div className="container mt-5 mb-5">
      {information ? <div>

        <div className="row mt-5">
          <div className="col-6">
            <select className="custom-select p-2" name="search" id="search" onClick={(e) => searchForName(e.target.value)} >
              <option value="todos">Todos</option>
              {columns.map((title) => {
                return (<option value={title.dataField}>{title.dataField}</option>)
              })}
            </select>

          </div>

          {name !== "todos" ?
            <div className="col-6">
              {showInput ?
                <div className="d-flex">
                  <input className="form-control" type="text" name="exact" onChange={(e) => setContent(e.target.value)}></input>
                  <button className="btn btn-success ml-3" onClick={search}>BUSCAR</button>
                </div>
                :
                <div className="d-flex">
                  <select className="custom-select p-2" name="search" id="search" onClick={(e) => { e.target.value == "false" ? setContent(false) : setContent(true) }} >
                    <option value="false">false</option>
                    <option value="true">true</option>
                  </select>
                  <button className="btn btn-success  ml-3" onClick={search}>BUSCAR</button>
                </div>
              }
            </div>
            : null}



        </div>


        <div className="d-flex justify-content-center mt-5">
          <h1 style={{ color: "#1dd81a", border: " 1px solid #1dd81a", padding: '1rem', width: '100%', backgroundColor: "#c0ffc4", textAlign: 'center' }}>{title}</h1>
        </div>
        <BootstrapTable
          keyField="name"
          data={!name || name == "todos" ? information : filtrados}
          columns={columns}
          pagination={paginationFactory()} />


      </div>
        : <div class="container">
          <div class="d-flex text-center justify-content-center flex-column align-items-center mt-5 p-5">
            <h3>Loading</h3>
            <div class="spinner-border mt-5" role="status">

              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>}

    </div>


  );
}





