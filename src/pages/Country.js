import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardBody from "../components/card/CardBody";

import Header from "../components/Header";
import useCountry from "../custom-hooks/useCountry";

const Country = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, countryError] = useCountry(name);

  return (
    <div>
      <Header title="Country List" />
      {country ? (
        <CardBody country={country} navigate={navigate} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Country;
