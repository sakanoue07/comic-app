import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Search from "./components/Comic/Search";
import Login from "./components/Auth/Login";
import Top from "./components/Comic/Top";
import Error from "./components/Error";
import "./App.css";
import { useSelector } from "react-redux";
import { AppState } from "./redux/Store";
function App() {
  const signedIn = useSelector((state: AppState) => state.userAuth.isSignedIn);

  return (
    <div>
      <Switch>
        <Route exact path="/top" component={Top} />
        {signedIn ? (
          <>
            <Route exact path="/search" component={Search} />
          </>
        ) : (
          <>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={Error} />
            {/* <Route exact path="/top" component={Error} /> */}
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
