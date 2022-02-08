import "./App.css";
import SearchBar from "./components/search/SearchBar";
import CountreisTable from "./components/table/CountriesTable";
import useCountries from "./custom-hooks/useCountries";

function App() {
  const [countries, countriesError] = useCountries();

  return (
    <div>
      <header className="title-container">
        <h1>Frontend Project</h1>
      </header>
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
    </div>
  );
}

export default App;
