import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100vw;
`;

const Input = styled.input`
  all: unset;
  font-size: 15px;
  width: 100vw;
`;

const SearchPresenter = ({
  movieResult,
  tvResult,
  searchTerm,
  handleSubmit,
  updatedTerm,
  error,
  loading
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      {/* SearchContainer안에 있는 서브밋, searchTerm에 넣어주면 찾음 */}
      <Input
        placeholder="Search Movies or Tv Shows"
        value={searchTerm}
        onChange={updatedTerm}
      />
      {/* handleSubmit안에 searchTerm에 담아주면 SearchContainer
        가 States에 넣고 다시 SearchPresenter로 전달해줌 
        Input안에 value로 해놔서 추적가능함 */}
      {/*
        onChange로 해놓은 업데이트 함수에 SyntheticEvent계속 들어감
        */}
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {/* movie show 여러 부류 검색결과가 리턴되니 fragment필요 */}
        {movieResult && movieResult.length > 0 && (
          <Section title="Movie Results">
            {movieResult.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResult && tvResult.length > 0 && (
          <Section title="TV Results">
            {tvResult.map(show => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        )}
        {error && <Message text={error} color="red" />}
        {tvResult &&
          movieResult &&
          tvResult.length === 0 &&
          movieResult.length === 0 && (
            <Message text="Nothing found" color="grey" />
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  // props의 자료형 정해줌propTypes
  movieResult: propTypes.array,
  tvResult: propTypes.array,
  searchTerm: propTypes.string,
  handleSubmit: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.string,
  updatedTerm: propTypes.func.isRequired
};

export default SearchPresenter;
