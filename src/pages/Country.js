import { Fragment } from "react";
import { useParams } from "react-router-dom";
import CardBody from "../components/card/CardBody";

import Header from "../components/head/Header";
import { useGetCountryByNameQuery } from "../redux/service/countries";

const Country = () => {
  const { name } = useParams();
  const { data, error, isLoading } = useGetCountryByNameQuery(name);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Oh no, there was an error</p>;
  }
  return (
    <Fragment>
      <Header title="Country Detail" />
      <CardBody countryDetail={data[0]} />
    </Fragment>
  );
};

export default Country;
