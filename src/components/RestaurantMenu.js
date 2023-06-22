import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantMenu = useRestaurantMenu(id);
  console.log(restaurantMenu, 9)

  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards?.[0]?.card?.card?.info;

  const { itemCards } =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
