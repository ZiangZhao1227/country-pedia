import SearchBar from "../components/search/SearchBar";
import CountreisTable from "../components/table/CountriesTable";
import Header from "../components/head/Header";
import { Fragment } from "react";
import Logo from "../components/logo/Logo";

interface HomeProps {
  check: boolean;
}

const Home = ({ check }: HomeProps) => {
  return (
    <Fragment>
      <Header title="Country List" check={check} />
      <Logo />
      <section className="search-container">
        <SearchBar />
      </section>
      <section className="countries-info-container">
        <CountreisTable />
      </section>
    </Fragment>
  );
};

export default Home;
