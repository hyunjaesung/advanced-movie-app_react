import React, { useEffect, useState } from "react";
import { movieApi, TVApi } from "../api";

const Productions = ({ location, match }) => {
  const [isMovie, setIsMovie] = useState(location.pathname.includes("/movie/"));
  const [productions, setProductions] = useState(null);
  const [countries, setCountries] = useState(null);
  const parsedId = parseInt(match.params.id);

  useEffect(() => {
    const callApi = async () => {
      try {
        if (isMovie) {
          const { data } = await movieApi.movieDetail(parsedId);
          setProductions(data.production_companies);
          setCountries(data.production_countries);
        } else {
          const { data } = await TVApi.showDetail(parsedId);
          console.log(data);
          setProductions(data.production_companies);
          setCountries(data.origin_country);
        }
      } catch (e) {
        console.log(e);
      }
    };
    callApi();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>
        Product Companies
      </h1>
      <div style={{ marginBottom: "20px" }}>
        {productions &&
          productions.map(item => <div key={item.id}>{item.name}</div>)}
      </div>
      <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>
        Product Countries
      </h1>
      <div>
        {isMovie
          ? countries &&
            countries.map(item => <div key={item.id}>{item.name}</div>)
          : countries &&
            countries.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  );
};

export default Productions;
