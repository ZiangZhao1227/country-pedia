import React from "react";
import { useState } from "react";

import SearchBar from "../components/search/SearchBar";
import CountreisTable from "../components/table/CountriesTable";
import Header from "../components/Header";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <Header title="Country List" />
      <section className="search-container">
        <SearchBar setSearchTerm={setSearchTerm} handleChange={handleChange} />
      </section>
      <section className="countries-info-container">
        <CountreisTable searchTerm={searchTerm} />
      </section>
    </div>
  );
};

export default Home;
