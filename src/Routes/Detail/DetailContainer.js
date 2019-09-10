import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, TVApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
      // 생성자클래스라서
      // pathname 존재하지않는다
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push },
      location: { pathname }
    } = this.props;

    const { isMovie } = this.state; // state에 넣은 값을 가지고옴

    const parsedID = parseInt(id);

    if (isNaN(parsedID)) {
      return push("/");
    }

    let result = null;

    try {
      if (isMovie) {
        const request = await movieApi.movieDetail(parsedID);
        result = request.data;
        //const { data: result } = await movieApi.movieDetail(parsedID);
      } else {
        const request = await TVApi.showDetail(parsedID);
        result = request.data;
      }
      // console.log(result);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    // console.log(result);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
