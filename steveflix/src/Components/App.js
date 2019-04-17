import React, { Component } from "react";
import Router from "./Router";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
    {
      /* 리액트는 리턴 하나만 가능 -> Fragment 사용하면 내가원하는만큼 리턴가능 */
    }
  }
}

export default App;
