import { Link } from "react-router-dom";
import Header from "../components/head/Header";

interface NotFoundProps {
    check: boolean;
  }

const NotFound = ({ check }:NotFoundProps) => {
  return (
    <div>
      <Header title="CountryDetail" check={check} />
      <h2 style={{marginTop:"100px"}}>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the home page</Link>
    </div>
  );
};

export default NotFound;
