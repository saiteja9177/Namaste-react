import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
 const [listOfRestaurants, setFilterdList] = useState(resList)

 useEffect(() => {fetchData()}, []);

 const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4358411&lng=78.3467857&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  setFilterdList(json.data.cards[2].data.data.cards)
 }
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterdList = listOfRestaurants.filter((res) => res.data.avgRating > 4.0);
            setFilterdList(filterdList)
          }}
        >
          TopRated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
