import React from "react";
import { Route, Switch } from "react-router-dom";
import Map from "./components/Map";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/map" component={Map} />
      </Switch>
    </div>
  );
}

export default App;
