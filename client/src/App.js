import React, { Component } from "react";
import Login from "./containers/Login";
import Registration from "./containers/Registration";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Registration />
        <Login />
      </div>
    );
  }
}

export default App;
