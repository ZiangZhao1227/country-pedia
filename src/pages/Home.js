import SearchBar from "../components/search/SearchBar";
import CountreisTable from "../components/table/CountriesTable";
import Header from "../components/head/Header";

const Home = () => {
  return (
    <div>
      <Header title="Country List" />
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
