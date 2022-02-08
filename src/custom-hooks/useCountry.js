import { useEffect, useState } from "react";

const useCountry = (name) => {
  const [country, setCountry] = useState(null);
  const [countryError, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async (name) => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`,
          {
            method: "get",
            signal: controller.signal,
          }
        );
        if (response.status !== 200) {
          throw new Error("cannot fetch the data");
        }
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error);
        console.log(error.message);
      }
    };
    fetchData(name);

    return () => {
      controller.abort();
    };
  }, [name]);

  return [country, countryError];
};

export default useCountry;
