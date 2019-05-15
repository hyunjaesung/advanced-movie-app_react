import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="https://hyunjaesung.github.io/advanced-movie-app_react/" exact component={Home} />
        <Route path="https://hyunjaesung.github.io/advanced-movie-app_react/tv" exact component={TV} />
        <Route path="https://hyunjaesung.github.io/advanced-movie-app_react/search" exact component={Search} />
        <Route path="https://hyunjaesung.github.io/advanced-movie-app_react/movie/:id" component={Detail} />
        <Route path="https://hyunjaesung.github.io/advanced-movie-app_react/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
        {/* 일치하는 Route가 하나도 없다면 어느페이지든지 "/"  여기로 보내라 */}
      </Switch>
    </>
  </Router>
);
