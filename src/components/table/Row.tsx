import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { Fragment } from "react";
import CircleIcon from "@mui/icons-material/Circle";

import "./Table.css";
import Favorite from "./Favorite";

interface dataProps {
  data: [];
}

interface CountryProps {
  flags: {
    png: string;
  };
  name: {
    official: string;
    common: string;
  };
  population: number;
  languages: {
    [key: string]: string;
  };
  region: string;
}

interface filteredCountriesProps {
  name: {
    common: string;
  };
}

const Row = ({ data }: dataProps) => {
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
  const filteredCountries = (array: []) => {
    if (!searchTerm) {
      return array;
    }
    return array.filter((country: filteredCountriesProps) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <Fragment>
      {filteredCountries(data).map((country: CountryProps) => (
        <TableRow key={country.name.official} className="row-container">
          <TableCell align="center" component="th" scope="row">
            <img
              src={country.flags.png}
              alt="country flags"
              className="row-container__img"
            ></img>
          </TableCell>
          <TableCell align="center">
            <Link
              to={`/country/${country.name.official}`}
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
            <Favorite />
          </TableCell>
        </TableRow>
      ))}
    </Fragment>
  );
};

export default Row;
