import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
 const [listOfRestaurants, setFilterdList] = useState(resList)
  
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
