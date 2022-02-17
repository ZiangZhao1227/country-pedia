import TableBody from "@material-ui/core/TableBody";

import Row from "./Row";

interface dataProps {
  data: [] | undefined;
}

const Body = ({ data }: dataProps) => {
  return (
    <TableBody>
      <Row data={data} />
    </TableBody>
  );
};

export default Body;
