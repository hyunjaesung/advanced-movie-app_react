import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <>
      {/* 라우터 생성 */}
      <Route path="/" exact component={Home} />
      {/* 어떤 경로로 갔을때 어떤 컴포넌트를 보여줄것인가 */}
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
    </>
  </Router>
);
