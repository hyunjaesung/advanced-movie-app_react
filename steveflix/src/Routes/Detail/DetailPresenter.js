import React from "react";
import ProsTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  /* 네비게이션 바 만큼 계산해줌 */
  width: 100%;
  position: relative;
  padding: 50px;
`;

// 이미지 블러효과를 위해서
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relateive;
  z-index: 1;
`;
const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 5;
  border-radius: 5px;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/yeji.jpg")
          }
        />
      </Content>
    </Container>
  );

DetailPresenter.ProsTypes = {
  // props의 자료형 정해줌
  results: ProsTypes.object,
  error: ProsTypes.bool.isRequired,
  loading: ProsTypes.string
};

export default DetailPresenter;
