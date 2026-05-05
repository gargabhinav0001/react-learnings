import "./RestaurantCard.css";

export const RestaurantCard = ({ data }) => {
  const { name, cuisines, avgRating, price, image } = data;

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={image} alt={name} className="card-img" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{name}</h3>

        <p className="card-cuisines">{cuisines.join(", ")}</p>

        <div className="card-footer">
          <span className="rating">⭐ {avgRating}</span>
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
};
