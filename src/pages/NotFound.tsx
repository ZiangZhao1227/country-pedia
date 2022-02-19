import { Link } from "react-router-dom";
import Header from "../components/head/Header";

import { CheckProps } from "../types/Types";

const NotFound = ({ check }: CheckProps) => {
  return (
    <div>
      <Header title="404 Error" check={check} />
      <h2 style={{ marginTop: "100px" }}>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the home page</Link>
    </div>
  );
};

export default NotFound;
