import { IMG_CDN_LINK } from "../config";

const ProductCard = ({
  cloudinaryImageId,
  name,
  areaName,
  costForTwo,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_LINK + cloudinaryImageId} alt="product-card-img" />
      <div className="card-details">
        <strong>{name}</strong>
        <p>{areaName}</p>
        <p style={{ color: "green" }}>{costForTwo}</p>
        <p>{cuisines?.slice(0, 2).join(", ")}</p>
        <p style={{ color: "gold" }}>{avgRating}★</p>
      </div>
    </div>
  );
};

export default ProductCard;
