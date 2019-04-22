import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";
import Detail from "Components/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" compnent={Detail} />
        <Route path="/show/:id" compnent={Detail} />
        <Redirect from="*" to="/" />
        {/* 일치하는 Route가 하나도 없다면 어느페이지든지 "/"  여기로 보내라 */}
      </Switch>
    </>
  </Router>
);
