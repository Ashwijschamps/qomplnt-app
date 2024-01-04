import { useRouteError } from "react-router-dom";

export default function ErrorPage(props) {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry</p>
      <p>
        <i>{props ? props?.text : error.statusText || error.message}</i>
      </p>
    </div>
  );
}