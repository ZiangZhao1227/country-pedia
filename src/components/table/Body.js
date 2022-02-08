import React from 'react';
import TableBody from "@material-ui/core/TableBody";

import Row from './Row';


const Body = ({countries, getCountryLanguages}) => {
  return (
    <TableBody>
        <Row countries={countries} getCountryLanguages={getCountryLanguages}/>
  </TableBody>
  );
};

export default Body;
