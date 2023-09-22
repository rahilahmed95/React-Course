import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  console.log(status, statusText);

  return (
    <div className="error_component">
      <h1>Ooops!!</h1>
      <h3>Something Went Wrong</h3>
      <p>{status}</p>
      <p>{statusText}</p>
    </div>
  );
};

export default Error;
