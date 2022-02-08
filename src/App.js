import './App.css'
import useCountries from './custom-hooks/useCountries';
import useCountry from './custom-hooks/useCountry';

function App() {
  const [countries, countriesError] = useCountries();
  const [country, countryError] = useCountry('Finland');
  console.log(country)
  console.log(countries)
  return <div className='App'>
  </div>
}

export default App
