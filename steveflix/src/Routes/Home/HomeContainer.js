import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    // 컴포넌트 실행끝낼때
    try {
      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying(); // 리스폰스 기다려줘!

      const {
        data: { results: upcoming }
      } = await movieApi.upcoming();

      const {
        data: { results: popular }
      } = await movieApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      }); // State에 넣어줌
    } catch {
      this.setState({
        error: "can't find movies infomation."
      });
    } finally {
      this.setState({
        loading: false // 에러가 나든 무비가 나오든
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
