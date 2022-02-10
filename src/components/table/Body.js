import TableBody from "@material-ui/core/TableBody";

import Row from "./Row";

const Body = ({ data }) => {
  return (
    <TableBody>
      <Row data={data} />
    </TableBody>
  );
};

export default Body;
