import SearchBar from "../components/search/SearchBar";
import CountreisTable from "../components/table/CountriesTable";
import Header from "../components/head/Header";
import { Fragment } from "react";
import Logo from "../components/logo/Logo";
import Form from "../components/sort/Form";
import Grid from "@mui/material/Grid";

interface HomeProps {
  check: boolean;
}

const Home = ({ check }: HomeProps) => {
  return (
    <Fragment>
      <Header title="Country List" check={check} />
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
        <CountreisTable />
      </section>
    </Fragment>
  );
};

export default Home;
