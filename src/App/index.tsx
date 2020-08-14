import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import TopBar from "./Components/TopBar";
import Repos from "./Views/Repos";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <TopBar />

      <StyledDiv>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/repos">
          <Repos />
        </Route>
      </Switch>
      </StyledDiv>
    </Router>
  );
}

const StyledDiv = styled.div`
  padding: 20px;
  overflow: auto;
`;

export default App;
