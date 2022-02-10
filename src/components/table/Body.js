import React from "react";
import TableBody from "@material-ui/core/TableBody";

import Row from "./Row";

const Body = ({ getCountryLanguages }) => {
  return (
    <TableBody>
      <Row getCountryLanguages={getCountryLanguages}/>
    </TableBody>
  );
};

export default Body;
