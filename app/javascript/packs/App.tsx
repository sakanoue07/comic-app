import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Search from "./components/Comic/Search";
import Login from "./components/Auth/Login";
import ComicShow from "./components/Comic/ComicShow";
import Top from "./components/Comic/Top";
import Error from "./components/Error";
import "./App.css";
import { useSelector } from "react-redux";
import { AppState } from "./redux/Store";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`;
function App() {
  const signedIn = useSelector((state: AppState) => state.userAuth.isSignedIn);

  return (
    <Wrapper>
      <Switch>
        {signedIn ? (
          <>
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={Top} />
            <Route exact path="/comicName" component={ComicShow} />
          </>
        ) : (
          <>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={Error} />
            <Route exact path="/top" component={Error} />
            <Route exact path="/comicName" component={Error} />
            {/* <Route exact path="/top" component={Error} /> */}
          </>
        )}
      </Switch>
    </Wrapper>
  );
}

export default App;
