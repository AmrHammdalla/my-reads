import React, { Component } from "react";
import {Route,Switch} from "react-router-dom"
import Home from "./Home";
import Search from "./Search";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/Search" component={Search}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
