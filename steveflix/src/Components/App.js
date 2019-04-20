import React, { Component } from "react";
import Router from "Components/Router";

// index.js가 있기때문에 이렇게 써도 해당폴더가서 가져올수 있음
// ./이런경로보다 이렇게써야함

class App extends Component {
  render() {
    return (
      <>
        <Router />
      </>
    );
    {
      /* 리액트는 리턴 하나만 가능 -> Fragment 사용하면 내가원하는만큼 리턴가능 */
    }
  }
}

export default App;
