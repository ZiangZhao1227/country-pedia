// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountryBodyProps } from "../../types/Types";

// Define a service using a base URL and expected endpoints
export const countriesApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query<[] | undefined, void>({
      query: () => `all`,
    }),
    getCountryByName: builder.query<CountryBodyProps, string>({
      query: (name) => `name/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCountriesQuery, useGetCountryByNameQuery } = countriesApi;
