import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => movie.title)}
        </Section>
      )}
      {/* 트리플 체크 필요!, children은 title처럼 주지않고 태그사이의 값을 받음 */}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">{upcoming.map(movie => movie.title)}</Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">{popular.map(movie => movie.title)}</Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  // props의 자료형 정해줌
  nowPlaying: propTypes.array,
  upcoming: propTypes.array,
  popular: propTypes.array,
  error: propTypes.bool.isRequired,
  loading: propTypes.string
};

export default HomePresenter;
