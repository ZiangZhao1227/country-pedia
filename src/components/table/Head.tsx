import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import "./Table.css";

const Head = () => {
  return (
    <TableHead className="table-head-container">
      <TableRow>
        <TableCell className="table-head-container__header" align="center">
          FLAG
        </TableCell>
        <TableCell className="table-head-container__header" align="center">
          NAME
        </TableCell>
        <TableCell className="table-head-container__header" align="center">
          POPULATION&nbsp;
        </TableCell>
        <TableCell className="table-head-container__header" align="center">
          REGION&nbsp;
        </TableCell>
        <TableCell className="table-head-container__header" align="center">
          LANGUAGES&nbsp;
        </TableCell>
        <TableCell className="table-head-container__header" align="center">
          FAVORITE&nbsp;
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default Head;
