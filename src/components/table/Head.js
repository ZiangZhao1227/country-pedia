import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Head = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>FLAG</TableCell>
        <TableCell align="right">NAME</TableCell>
        <TableCell align="right">POPULATION&nbsp;</TableCell>
        <TableCell align="right">REGION&nbsp;</TableCell>
        <TableCell align="right">LANGUAGES&nbsp;</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
