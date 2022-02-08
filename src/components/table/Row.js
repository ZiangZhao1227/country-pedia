import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";

import "./Table.css";

const Row = ({ countries, getCountryLanguages }) => {
  return (
    <>
      {countries.map((country) => (
        <TableRow key={country.name.official}>
          <TableCell align="center" component="th" scope="row">
            <img src={country.flags.png} alt="country flags"></img>
          </TableCell>
          <TableCell align="center">
            <Link
              to={`/country/${country.name.common}`}
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
    </>
  );
};

export default Row;
