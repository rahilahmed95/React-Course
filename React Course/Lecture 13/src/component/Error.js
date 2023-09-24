import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  console.log(status, statusText);

  return (
    <div className="flex flex-col justify-center items-center mt-14">
      <h1 className="mb-5 font-bold text-3xl">Ooops!!</h1>
      <h3 className="mb-5 font-bold text-xl">Something Went Wrong</h3>
      <p className="mb-5 text-lg">{status}</p>
      <p className="mb-5 text-lg">{statusText}</p>
    </div>
  );
};

export default Error;
