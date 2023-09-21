import "./Shimmer.css";

const Shimmer = () => {
  const number = Array.from({ length: 10 });
  return (
    <div className="Products">
      {number.map((one) => (
        <div className="card shimmer-card">
          <div className="shimmer-image"></div>
          <p className="shimmer-data"></p>
          <p className="shimmer-data"></p>
          <p className="shimmer-data"></p>
          <p className="shimmer-data"></p>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
