import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import Head from "./Head";
import Body from "./Body";

const CountriesTable = ({ countries }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const getCountryLanguages = (country) => {
    let languages = [];
    for (let item in country) {
      languages.push(country[item]);
    }
    return languages;
  };

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <Head />
        <Body countries={countries} getCountryLanguages={getCountryLanguages}/>
      </Table>
    </TableContainer>
  );
};

export default CountriesTable;
