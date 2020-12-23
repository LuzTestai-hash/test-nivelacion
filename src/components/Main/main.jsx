import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from '../Navbar/navbar';

const main = ({ routes }) => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              exact={route.exact}
              path={route.path}
              key={i}
              meta={route.meta}
              render={props => {
                // pass the sub-routes down to keep nesting
                return <route.component  {...props} routes={route.routes} meta={route.meta} />
              }}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default main;





