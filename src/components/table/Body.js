import React from "react";
import TableBody from "@material-ui/core/TableBody";

import Row from "./Row";

const Body = ({ getCountryLanguages, searchTerm }) => {
  return (
    <TableBody>
      <Row getCountryLanguages={getCountryLanguages} searchTerm={searchTerm} />
    </TableBody>
  );
};

export default Body;
