import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import Head from "./Head";
import Body from "./Body";
import "./Table.css";

const CountriesTable = () => {
  const getCountryLanguages = (country) => {
    let languages = [];
    for (let item in country) {
      languages.push(country[item]);
    }
    return languages;
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className="table-container">
        <Head />
        <Body getCountryLanguages={getCountryLanguages} />
      </Table>
    </TableContainer>
  );
};

export default CountriesTable;
