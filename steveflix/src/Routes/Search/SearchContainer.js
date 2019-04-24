import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, TVApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false // 디폴트로 아무것도 로딩 안함! 검색기다림
  };

  handleSubmit = event => {
    event.preventDefault(); // 엔터를 쳐도 자동으로 submit&초기화안됨
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updatedTerm = event => {
    const {
      target: { value }
    } = event;
    console.log(value);
    this.setState({
      // 이거해야 한글자가아니라 Presenter에서 여러글자 value로 쌓여감
      searchTerm: value
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await movieApi.search(searchTerm);

      const {
        data: { results: tvResults }
      } = await TVApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({ error: "can't find results" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;

    return (
      <SearchPresenter
        movieResult={movieResults}
        tvResult={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updatedTerm={this.updatedTerm}
      />
    );
  }
}
