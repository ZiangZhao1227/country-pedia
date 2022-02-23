import Grid from "@mui/material/Grid";

import SearchBar from "../components/search/SearchBar";
import CountreisTable from "../components/table/Container";
import Header from "../components/head/Header";
import { Fragment } from "react";
import Logo from "../components/logo/Logo";
import Form from "../components/sort/Form";
import { CheckProps } from "../types/Types";
import { useGetCountriesQuery } from "../redux/service/countries";
import Loading from "../components/table/LoadingHome";
import Footer from "../components/footer/Footer";

const Home = ({ check }: CheckProps) => {
  const { data, error, isLoading } = useGetCountriesQuery();
  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <p>Oh no, there was an error</p>;
  }
  return (
    <Fragment>
      <Header title="CountryList" check={check} />
      <Logo />
      <section className="search-container">
        <Grid container>
          <Grid item xs={11}>
            <SearchBar />
          </Grid>
          <Grid item xs={1}>
            <Form />
          </Grid>
        </Grid>
      </section>
      <section className="countries-info-container">
        <CountreisTable data={data} />
      </section>
      <Footer />
    </Fragment>
  );
};

export default Home;
