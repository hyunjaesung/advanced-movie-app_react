import React from "react";
import ProsTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ topRated, airingToday, popular, error, loading }) =>
  null;

TVPresenter.ProsTypes = {
  // props의 자료형 정해줌
  topRated: ProsTypes.array,
  airingToday: ProsTypes.array,
  popular: ProsTypes.array,
  error: ProsTypes.bool.isRequired,
  loading: ProsTypes.string
};

export default TVPresenter;
