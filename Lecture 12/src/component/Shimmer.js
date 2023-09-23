const Shimmer = () => {
  const number = Array.from({ length: 10 });
  return (
    <div className="flex flex-wrap justify-center p-8">
      {number.map((digit, index) => (
        <div
          key={index}
          className="flex flex-col h-72 w-64 m-8 rounded-t-lg shadow-md "
        >
          <div className="h-[500px] w-64 bg-gray-900 opacity-30 rounded-t-lg"></div>
          <p className="h-9 w-4/5 mx-auto bg-gray-900 opacity-30 mt-5"></p>
          <p className="h-9 w-4/5 mx-auto bg-gray-900 opacity-30 mt-5"></p>
          <p className="h-9 w-4/5 mx-auto bg-gray-900 opacity-30 mt-5"></p>
          <p className="h-9 w-4/5 mx-auto bg-gray-900 opacity-30 my-5"></p>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
