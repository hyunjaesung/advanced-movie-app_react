import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, airingToday, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">{topRated.map(show => show.name)}</Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map(show => show.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">{popular.map(show => show.name)}</Section>
      )}
      {error && <Message text={error} color="red" />}
    </Container>
  );

TVPresenter.propTypes = {
  // props의 자료형 정해줌
  topRated: propTypes.array,
  airingToday: propTypes.array,
  popular: propTypes.array,
  error: propTypes.bool.isRequired,
  loading: propTypes.string
};

export default TVPresenter;
