import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardBody from "../components/card/CardBody";

import Header from "../components/Header";
import { useGetCountryByNameQuery } from "../service/countries";

const Country = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const { data, error, isLoading } = useGetCountryByNameQuery(name);
  const getfirstInput = (obj) => {
    const firstInput = Object.keys(obj)[0];
    return firstInput;
  };
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Header title="Country Detail" />
          <CardBody
            country={data[0]}
            navigate={navigate}
            getfirstInput={getfirstInput}
          />
        </>
      ) : null}
    </div>
  );
};

export default Country;
