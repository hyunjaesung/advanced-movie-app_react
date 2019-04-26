import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  /* 이걸해야지 딱 박스 사이즈에 맞게 이미지 줄여줌 */
  border-radius: 4px;
  transition: opacity 0.3s linear;
  background-position: center center;
`;

const Rating = styled.span`
  position: absolute;
  bottom: -5px;
  right: 5px;
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 0.6;
    }
  }
`;
// Image랑 Rating이 더위에 선언이 되어야 실행된다!!

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/show/${id}` : `/movie/${id}`}>
    {/* 무비랑 쇼 링크 구분 */}
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w300${imgUrl}`
              : require("../assets/yeji.jpg")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            🍅
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 20 ? `${title.substring(0, 20)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: propTypes.number.isRequired,
  imageUrl: propTypes.string,
  title: propTypes.string.isRequired,
  rating: propTypes.number,
  year: propTypes.string,
  isMovie: propTypes.bool
};

export default Poster;
