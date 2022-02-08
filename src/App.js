import './App.css'
import useCountries from './custom-hooks/useCountries';

function App() {
  const [data, error] = useCountries();
  console.log(error)
  return <div className='App'>
    {data && <div>{data}</div>}
  </div>
}

export default App
