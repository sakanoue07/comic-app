import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Map from "./components/Map";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/map" component={Map} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
