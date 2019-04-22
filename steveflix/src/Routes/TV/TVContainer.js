import React from "react";
import TVPresenter from "./TVPresenter";
import { TVApi } from "api";

export default class extends React.Component {
  state = {
    topRated: null,
    airingToday: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    // 컴포넌트 실행끝낼때
    try {
      const {
        data: { results: topRated }
      } = await TVApi.topRated(); // 리스폰스 기다려줘!

      const {
        data: { results: airingToday }
      } = await TVApi.airingToday();

      const {
        data: { results: popular }
      } = await TVApi.popular();
      this.setState({
        topRated,
        airingToday,
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
    const { topRated, airingToday, popular, error, loading } = this.state;

    return (
      <TVPresenter
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
