import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { routes } from './routes';


export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route
            path={route.path}
            exact={route.exact}
            key={i}
            render={props => {
              // pass the sub-routes down to keep nesting
              return <route.component {...props} routes={route.routes} />
            }}
          />
        ))}
      </Switch>
    </Router>
  )
}
