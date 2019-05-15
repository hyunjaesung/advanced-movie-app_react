import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div``;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 30px;
`;

const boxBigger = keyframes`
  0% {
    transform: none;
  }
  20% {
    transform: scale(1, 2);
  }
  50% {
    transform: none;
  }
  100% {
    transform: none;
  }
`;

const MovingBox = styled.div`
  width: 5px;
  height: 30px;
  background-color: rgba(255, 255, 255, 1);
  margin: 3px;
  animation: 1s ${boxBigger} infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
`;

const Loading = () => (
  <Container>
    <Timer>
      <MovingBox />
      <MovingBox />
      <MovingBox />
      <MovingBox />
      <MovingBox />
    </Timer>
  </Container>
);

export default Loading;
