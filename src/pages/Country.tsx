import { Fragment } from "react";
import { useParams } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

import CardBody from "../components/card/CardBody";
import Header from "../components/head/Header";
import { useGetCountryByNameQuery } from "../redux/service/countries";
import { CheckProps } from "../types/Types";

const Country = ({ check }: CheckProps) => {
  const { name } = useParams() as {
    name: string;
  };
  const { data, error, isLoading } = useGetCountryByNameQuery(name);

  return (
    <Fragment>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>
          Loading... <LinearProgress />
        </>
      ) : data ? (
        <>
          <Fragment>
            <Header title="CountryDetail" check={check} />
            <CardBody countryDetail={data[0]} />
          </Fragment>
        </>
      ) : null}
    </Fragment>
  );
};

export default Country;
