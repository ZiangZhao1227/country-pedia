import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import Head from "./Head";
import Body from "./Body";
import { BodydataProps } from "../../types/Types";

import "./Table.css";

const Container = ({ data }: BodydataProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className="table-container">
        <Head />
        <Body data={data} />
      </Table>
    </TableContainer>
  );
};

export default Container;
