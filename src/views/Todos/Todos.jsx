import { useState, useEffect } from 'react';
import todosService from '../../services/todos';


import Table from '../../components/Table/table';

export const Todos = () => {
  const [information, setIsInformation] = useState([]);
  const [name, setName] = useState(null);
  const [content, setContent] = useState(null);
  const [filtrados, setFiltrados] = useState([]);
  const [showInput, setShowInput] = useState(Boolean)


  useEffect(() => {
    todosService.getInfo()
      .then((res) => setIsInformation(res))
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

  const searchForName = (e) => {
    setName(e)
    e == "completed" ? setShowInput(false) : setShowInput(true)
  }

  const search = () => {
    setFiltrados(information.filter(obj => obj[name] == content))
  }


  return (
    <div className="container">

      <Table title={"Todos"}
        information={information}
        filtrados={filtrados}
        columns={columns}
        keyObj={name}
        objContent={content}
        searchForName={searchForName}
        search={search}
        showInput={showInput}
        setContent={setContent}
        name={name} />
    </div >
  );
}