import React from "react";
import SearchBar from "../components/search/SearchBar";
import CountreisTable from "../components/table/CountriesTable";
import useCountries from "../custom-hooks/useCountries";
import Header from "../components/Header";

const Home = () => {
  const [countries, countriesError] = useCountries();
  return (
    <>
      <Header title="Cuntry List" />
      <section className="search-container">
        <SearchBar />
      </section>
      <section className="countries-info-container">
        {countries ? (
          <CountreisTable countries={countries} />
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </>
  );
};

export default Home;
