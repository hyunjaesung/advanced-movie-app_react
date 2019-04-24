import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResult,
  tvResult,
  searchTerm,
  handleSubmit,
  error,
  loading
}) => null;

SearchPresenter.propTypes = {
  // props의 자료형 정해줌propTypes
  movieResult: propTypes.array,
  tvResult: propTypes.array,
  searchTerm: propTypes.string,
  handleSubmit: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.string
};

export default SearchPresenter;
