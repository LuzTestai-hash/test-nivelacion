import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';



export default function TableInformation({ information, columns, name }) {

  return (
    <div className="container mt-5 mb-5">
      <div class="d-flex justify-content-center">
        <h1 style={{ color: "#1dd81a", border: " 1px solid #1dd81a", padding: '1rem', width: '100%', backgroundColor: "#c0ffc4", textAlign: 'center' }}>{name}</h1>
      </div>
      <BootstrapTable
        keyField="name"
        data={information}
        columns={columns}
        pagination={paginationFactory()} />
    </div>
  );
}





