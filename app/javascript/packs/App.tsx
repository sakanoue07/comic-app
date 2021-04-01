import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Top from "./components/Top";
import Login from "./components/Auth/Login";
import Error from "./components/Error";
import "./App.css";
import { useSelector } from "react-redux";
import { AppState } from "./redux/Store";
function App() {
  const signedIn = useSelector((state: AppState) => state.userAuth.isSignedIn);

  return (
    <div>
      <Switch>
        {signedIn ? (
          <Route exact path="/top" component={Top} />
        ) : (
          <>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/top" component={Error} />
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
