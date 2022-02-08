import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import "./Table.css";

const Head = () => {
  return (
    <TableHead className="table-head-container">
      <TableRow>
        <TableCell align="center">FLAG</TableCell>
        <TableCell align="center">NAME</TableCell>
        <TableCell align="center">POPULATION&nbsp;</TableCell>
        <TableCell align="center">REGION&nbsp;</TableCell>
        <TableCell align="center">LANGUAGES&nbsp;</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
