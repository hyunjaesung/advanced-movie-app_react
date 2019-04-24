import React from "react";
import ProsTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  null;

HomePresenter.ProsTypes = {
  // props의 자료형 정해줌
  nowPlaying: ProsTypes.array,
  upcoming: ProsTypes.array,
  popular: ProsTypes.array,
  error: ProsTypes.bool.isRequired,
  loading: ProsTypes.string
};

export default HomePresenter;
