import React from "react";
import ProsTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ results, error, loading }) => null;

DetailPresenter.ProsTypes = {
  // props의 자료형 정해줌
  results: ProsTypes.object,
  error: ProsTypes.bool.isRequired,
  loading: ProsTypes.string
};

export default DetailPresenter;
