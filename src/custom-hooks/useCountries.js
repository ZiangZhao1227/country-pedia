import { useEffect, useState } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState(null);
  const [countriesError, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all", {
          method: "get",
          signal: controller.signal,
        });
        if (response.status !== 200) {
          throw new Error("cannot fetch the data");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setError(error);
        console.log(error.message);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return [countries, countriesError];
};

export default useCountries;
