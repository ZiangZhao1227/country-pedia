import { useParams } from "react-router-dom";
import CardBody from "../components/card/CardBody";

import Header from "../components/head/Header";
import { useGetCountryByNameQuery } from "../redux/service/countries";

const Country = () => {
  const { name } = useParams();
  const { data, error, isLoading } = useGetCountryByNameQuery(name);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Header title="Country Detail" />
          <CardBody countryDetail={data[0]} />
        </>
      ) : null}
    </div>
  );
};

export default Country;
