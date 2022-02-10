import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";

import "./Table.css";

const Row = ({ data }) => {
  const getCountryLanguages = (country) => {
    let languages = [];
    for (let item in country) {
      languages.push(country[item]);
    }
    return languages;
  };

  const searchTerm = useSelector((state) => state.search.value);
  const filteredCountries = (array) => {
    if (!searchTerm) {
      return array;
    }
    return array.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <Fragment>
      {filteredCountries(data).map((country) => (
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
          <TableCell align="center">{country.population}</TableCell>
          <TableCell align="center">{country.region}</TableCell>
          <TableCell align="center">
            {getCountryLanguages(country.languages).map((language, index) => (
              <div key={index}>{language}</div>
            ))}
          </TableCell>
        </TableRow>
      ))}
    </Fragment>
  );
};

export default Row;
