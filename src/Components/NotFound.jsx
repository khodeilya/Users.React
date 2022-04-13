import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";

const NotFound = () => {
  return (
    <>
      <h1>NotFound</h1>

      <Link to="/">
        <AwesomeButton type="primary">Back To Main Page</AwesomeButton>
      </Link>
    </>
  );
};
<div className="row btn "></div>;

export default NotFound;
