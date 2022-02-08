import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const Row = ({ countries, getCountryLanguages }) => {
  return (
    <>
      {countries.map((country) => (
        <TableRow key={country.name.official}>
          <TableCell component="th" scope="row">
            <img src={country.flags.png} alt="country flags"></img>
          </TableCell>
          <TableCell align="right">{country.name.common}</TableCell>
          <TableCell align="right">{country.population}</TableCell>
          <TableCell align="right">{country.region}</TableCell>
          <TableCell align="right">
            {getCountryLanguages(country.languages).map((language, index) => (
              <p key={index}>{language}</p>
            ))}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default Row;
