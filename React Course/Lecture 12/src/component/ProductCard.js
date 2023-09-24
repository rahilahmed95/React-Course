const ProductCard = ({ name, capital, population, flags, region }) => {
  return (
    <div className="w-72 m-8 rounded-b-xl shadow-lg transition-all duration-700 hover:shadow-2xl hover:scale-110">
      <img className="w-full h-full" src={flags?.svg} alt="flag-image" />
      <div className="p-5">
        <p>
          <strong>{name?.common}</strong>
        </p>
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {!capital ? "None" : capital}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
