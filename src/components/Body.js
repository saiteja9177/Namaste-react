import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setFilterdList] = useState([]);
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4358411&lng=78.3467857&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setFilterdList(json?.data?.cards[2]?.data?.data?.cards);
    setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline !!! Please check your internet connection.
      </h1>
    );

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const searchFilterdList = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterdRestaurants(searchFilterdList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filterdList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.0
            );
            setFilterdList(filterdList);
          }}
        >
          TopRated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterdRestaurants.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
