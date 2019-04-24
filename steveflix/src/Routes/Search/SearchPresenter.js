import React from "react";
import ProsTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResult,
  tvResult,
  searchTerm,
  handleSubmit,
  error,
  loading
}) => null;

SearchPresenter.ProsTypes = {
  // props의 자료형 정해줌
  movieResult: ProsTypes.array,
  tvResult: ProsTypes.array,
  searchTerm: ProsTypes.string,
  handleSubmit: ProsTypes.func.isRequired,
  loading: ProsTypes.bool.isRequired,
  error: ProsTypes.string
};

export default SearchPresenter;
