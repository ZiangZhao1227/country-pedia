import { Fragment } from "react";
import { useParams } from "react-router-dom";

import CardBody from "../components/card/CardBody";
import Header from "../components/head/Header";
import { useGetCountryByNameQuery } from "../redux/service/countries";
import { CheckProps } from "../types/Types";
import LoadingCard from "../components/card/LoadingCard";

const Country = ({ check }: CheckProps) => {
  const { name } = useParams() as {
    name: string;
  };
  const { data, error, isLoading } = useGetCountryByNameQuery(name);

  if (isLoading) {
    return <LoadingCard/>;
  } else if (error) {
    return <p>Oh no, there was an error</p>;
  } else if (data) {
    return (
      <Fragment>
        <Header title="CountryDetail" check={check} />
        <CardBody countryDetail={data[0]} />
      </Fragment>
    );
  }
  return null;
};

export default Country;
