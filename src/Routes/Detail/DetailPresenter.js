import React from "react";
import ProsTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import { Link, withRouter, Route } from "react-router-dom";
import Videos from "../../Components/Videos";
import Productions from "../../Components/Productions";

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
  opacity: 0.3;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relateive;
  transition: all 0.5s ease-in-out;
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

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
  z-index: 5;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin-bottom: 10px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50;
  text-align: justify;
`;

const InsideMenu = styled.div`
  margin: 20px 0px;
`;

const List = styled.ul`
  display: flex;
`;

const Itemli = styled.li`
  cursor: pointer;
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #34495e;
  padding: 5px;
  border-radius: 3px;
  background-color: ${props => (props.active ? "#34495e" : "transparent")};
  color: white;
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, result, error, loading }) =>
    loading ? (
      <>
        <Helmet>
          <title>Loading | Steveflix</title>
        </Helmet>
        <Loader />
      </>
    ) : (
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}
            } | Steveflix
          </title>
        </Helmet>
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
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>.</Divider>
              <Item>
                {result.runtime
                  ? `${result.runtime} min`
                  : `${result.episode_run_time} min`}
              </Item>
              <Divider>.</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
                {/* 마지막 부분은 /안쓰이게 map은 index를가진다!! */}
              </Item>
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            <InsideMenu>
              <List>
                <Itemli
                  active={
                    result.original_title
                      ? pathname === `/movie/${result.id}/videos`
                      : pathname === `/show/${result.id}/videos`
                  }
                >
                  <Link
                    to={
                      result.original_title
                        ? `/movie/${result.id}/videos`
                        : `/show/${result.id}/videos`
                    }
                  >
                    Videos
                  </Link>
                </Itemli>
                <Itemli
                  active={
                    result.original_title
                      ? pathname === `/movie/${result.id}/productions`
                      : pathname === `/show/${result.id}/productions`
                  }
                >
                  <Link
                    to={
                      result.original_title
                        ? `/movie/${result.id}/productions`
                        : `/show/${result.id}/productions`
                    }
                  >
                    Productions
                  </Link>
                </Itemli>
              </List>
            </InsideMenu>
            <Route
              path={
                result.original_title ? `/movie/:id/videos` : `/show/:id/videos`
              }
              exact
              component={Videos}
            />
            <Route
              path={
                result.original_title
                  ? `/movie/:id/productions`
                  : `/show/:id/productions`
              }
              exact
              component={Productions}
            />
          </Data>
        </Content>
      </Container>
    )
);

DetailPresenter.ProsTypes = {
  // props의 자료형 정해줌
  results: ProsTypes.object,
  error: ProsTypes.bool.isRequired,
  loading: ProsTypes.string
};

export default DetailPresenter;
