import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

export default function Error() {
  const error = useRouteError() as any;

  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} />
          <h3>Page not found</h3>
          <p>We can't seem to find the page you are looking for</p>
          <Link to="/dashboard">Go back</Link>
        </div>
      </Wrapper>
    );
  }
}
