import React from "react";
import SearchBar from "../components/search/SearchBar";
import CountreisTable from "../components/table/CountriesTable";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header title="Cuntry List" />
      <section className="search-container">
        <SearchBar />
      </section>
      <section className="countries-info-container">
        <CountreisTable />
      </section>
    </div>
  );
};

export default Home;
