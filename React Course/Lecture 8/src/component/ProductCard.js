const ProductCard = ({ name, capital, population, flags, region }) => {
  return (
    <div className="card">
      <img src={flags?.svg} alt="flag-image" loading="lazy" />
      <div className="card-details">
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
          <b>Capital:</b> {capital}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
