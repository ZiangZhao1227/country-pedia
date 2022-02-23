import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountryBodyProps } from "../../types/Types";

export const countriesApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query<[] | undefined, void>({
      query: () => `all`,
    }),
    getCountryByName: builder.query<CountryBodyProps, string>({
      query: (name) => `name/${name}?fullText=true`,
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryByNameQuery } = countriesApi;
