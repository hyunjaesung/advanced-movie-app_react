import React, { Component } from "react";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <>
        {" "}
        <Router />{" "}
      </>
    );
    {
      /* 리액트는 리턴 하나만 가능 -> Fragment 사용하면 내가원하는만큼 리턴가능 */
    }
  }
}

export default App;
