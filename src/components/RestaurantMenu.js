import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const {id} = useParams();
  console.log(id, 13)
  

  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        MENU_URL+id
      );
      const dataJson = await response.json();
      setRestaurantMenu(dataJson.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards?.[0]?.card?.card?.info || {};

const {itemCards} = restaurantMenu?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card.card;




console.log(itemCards)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item => {return (<li key={item.card.info.id}>{item.card.info.name}</li>)}))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
