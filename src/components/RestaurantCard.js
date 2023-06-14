import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    deliveryTime,
    costForTwoString,
  } = resData.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h6>{deliveryTime}</h6>
      <h6>{costForTwoString}</h6>
    </div>
  );
};

export default RestaurantCard;
