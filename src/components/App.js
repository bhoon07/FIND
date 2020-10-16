import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Animals from "../components/Dogs/dogList";
import Detail from "../components/Dogs/Detail";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/animals"]}>
            <Animals />
          </Route>
          <Route exact path="/animals/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
