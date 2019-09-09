import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

// index.js가 있기때문에 이렇게 써도 해당폴더가서 가져올수 있음
// ./이런경로보다 이렇게써야함

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
