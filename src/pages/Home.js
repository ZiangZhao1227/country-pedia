import SearchBar from "../components/search/SearchBar";
import CountreisTable from "../components/table/CountriesTable";
import Header from "../components/head/Header";
import { Fragment } from "react";

const Home = ({ check, change }) => {
  return (
    <Fragment>
      <Header title="Country List" check={check} change={change} />
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
