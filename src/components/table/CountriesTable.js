import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";

import Head from "./Head";
import Body from "./Body";
import { useGetCountriesQuery } from "../../redux/service/countries";
import "./Table.css";

const CountriesTable = () => {
  const { data, error, isLoading } = useGetCountriesQuery();
  if (isLoading) {
    return (
      <p>
        Loading... <LinearProgress />
      </p>
    );
  } else if (error) {
    return <p>Oh no, there was an error</p>;
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className="table-container">
        <Head />
        <Body data={data} />
      </Table>
    </TableContainer>
  );
};

export default CountriesTable;
