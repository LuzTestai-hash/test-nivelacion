import { useState, useEffect } from 'react';
import commentsService from '../../services/comments';

import Table from '../../components/Table/table';

export const Comments = () => {
  const [informationComments, setIsInformationComments] = useState([]);
  const [name, setName] = useState(null);
  const [content, setContent] = useState(null);
  const [filtrados, setFiltrados] = useState([]);
  const [showInput, setShowInput] = useState(Boolean)


  useEffect(() => {
    commentsService.getInfo()
      .then((res) => setIsInformationComments(res))
      .catch((err) => console.log(err));
  }, []);

  const searchForName = (e) => {
    setName(e)
    setShowInput(true)
  }



  const search = () => {
    if (name === "body") {
      var arrMatch = []
      informationComments.map(e => {
        var stringWithOutEnter = e.body.replace(/\n|\r/g, " ")
        if (e.body.includes(content) || stringWithOutEnter === content) { arrMatch.push(e) }
      })
      setFiltrados(arrMatch)
    } else {
      setFiltrados(informationComments.filter(obj => obj[name] == content))
    }
  }


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
        information={informationComments}
        filtrados={filtrados}
        columns={columns}
        keyObj={name}
        objContent={content}
        searchForName={searchForName}
        search={search}
        showInput={showInput}
        setContent={setContent}
        name={name}
      />
    </div >
  );
}