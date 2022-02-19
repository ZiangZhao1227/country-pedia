import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { Fragment, useCallback } from "react";
import CircleIcon from "@mui/icons-material/Circle";

import "./Table.css";
import { useAppSelector } from "../../hooks/hooks";
import Favorite from "./FavoriteIcon";
import { BodydataProps } from "../../types/Types";
import { RowProps } from "../../types/Types";
import { filteredCountriesProps } from "../../types/Types";

const Row = ({ data }: BodydataProps) => {
  const sortBy = useAppSelector((state) => state.sort.value);
  const fitlerHandler = useCallback(
    (countries) => {
      if (sortBy === "") {
        return [...countries];
      }
      if (sortBy === "populationAsc") {
        return [...countries].sort((a, b) =>
          b.population < a.population ? 1 : b.population > a.population ? -1 : 0
        );
      }
      if (sortBy === "populationDes") {
        return [...countries].sort((a, b) =>
          b.population < a.population ? -1 : b.population > a.population ? 1 : 0
        );
      }
      if (sortBy === "nameAsc") {
        return [...countries].sort((a, b) =>
          b.name.common < a.name.common
            ? 1
            : b.name.common > a.name.common
            ? -1
            : 0
        );
      }
      if (sortBy === "nameDes") {
        return [...countries].sort((a, b) =>
          b.name.common < a.name.common
            ? -1
            : b.name.common > a.name.common
            ? 1
            : 0
        );
      }
    },
    [sortBy]
  );

  const numFormatter = (num: number) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };

  const getCountryLanguages = (country: { [key: string]: string }) => {
    let languages = [];
    for (let item in country) {
      languages.push(country[item]);
    }
    return languages;
  };

  const searchTerm = useAppSelector((state) => state.search.value);
  const filteredCountries = (array: [] | undefined) => {
    if (!searchTerm) {
      return array;
    }
    return array?.filter((country: filteredCountriesProps) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <Fragment>
      {fitlerHandler(filteredCountries(data))?.map((country: RowProps) => (
        <TableRow key={country.name.common} className="row-container">
          <TableCell align="center" component="th" scope="row">
            <img
              src={country.flags.png}
              alt="country flags"
              className="row-container__img"
            ></img>
          </TableCell>
          <TableCell align="center">
            <Link
              to={`/country/${country.name.common}`}
              className="country-name-link"
            >
              {country.name.common}
            </Link>
          </TableCell>
          <TableCell align="center">
            {numFormatter(country.population)}
          </TableCell>
          <TableCell align="center">{country.region}</TableCell>
          <TableCell align="center">
            {getCountryLanguages(country.languages).map((language, index) => (
              <div key={index}>
                <CircleIcon style={{ fontSize: "10px", marginRight: "6px" }} />
                {language}
              </div>
            ))}
          </TableCell>
          <TableCell align="center">
            <Favorite
              countryObject={{
                CountryName: country.name.common,
                CountryFlag: country.flags.png,
              }}
            />
          </TableCell>
        </TableRow>
      ))}
    </Fragment>
  );
};

export default Row;
