import { useEffect, useState } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async (controller) => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all", {
          method: "get",
          signal: controller.signal,
        });
        if (response.status !== 200) {
          throw new Error("cannot fetch the data");
        }
        const data = await response.json();
        const countryListName = data.map(
            (country) => country.name.common
        );
        setCountries(countryListName);
      } catch (error) {
        setError(error);
        console.log(error.message);
      }
    };
    fetchData(controller);

    return () => {
      controller.abort();
    };
  }, []);

  return [countries, error];
};

export default useCountries;