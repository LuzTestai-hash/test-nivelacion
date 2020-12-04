import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Inicio from './containers/inicio';
import TableInformation from './containers/table';
import Comments from './containers/comments';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Inicio} />
        <Route exact path="/table" component={TableInformation} />
        <Route exact path="/comments" component={Comments} />
      </BrowserRouter>
    </div>
  );
}

export default App;
