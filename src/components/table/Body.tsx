import TableBody from "@material-ui/core/TableBody";

import Row from "./Row";
import { BodydataProps } from "../../types/Types";

const Body = ({ data }: BodydataProps) => {
  return (
    <TableBody>
      <Row data={data} />
    </TableBody>
  );
};

export default Body;
