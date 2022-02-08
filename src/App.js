import "./App.css";
import CountreisTable from "./components/table/CountriesTable";
import useCountries from "./custom-hooks/useCountries";


function App() {
  const [countries, countriesError] = useCountries();
 
  return (
    <div>
      {countries && <CountreisTable countries={countries}/>}
    </div>
  );
}

export default App;
