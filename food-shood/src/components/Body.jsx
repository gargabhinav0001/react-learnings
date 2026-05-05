import { RestaurantCard } from "./RestaurantCard/RestaurantCard";
import "./Body.css";
import { useEffect, useState } from "react";
import { Search } from "./Search/Search";

function MainBody() {
  const [list, setList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);

  console.log("render boduy");
  useEffect(() => {
    callForList();
  }, []);

  async function callForList() {
    try {
      const data = await fetch(
        "https://namastedev.com/api/v1/listRestaurants",
        {
          method: "GET",
        },
      );
      const res = await data.json();
      const temp =
        res.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (temp.length) {
        setList(temp);
        setSearchedList(temp);
      }
    } catch (error) {
      console.log("error caught: ", error);
    }
  }

  function filterListViaSearch(text) {
    console.log(list);
    const filteredRestraunts = list.filter(
      (item) =>
        item?.info?.name.toLowerCase().includes(text) ||
        item?.info?.cuisines.join("").toLowerCase().includes(text),
    );
    setSearchedList(filteredRestraunts);
  }

  function messages() {
    if (!list.length) return "Loading you favourite Restaurants......";
    if (!searchedList.length)
      return "Restaurants you are searching are not serving at present!";
  }

  return (
    <div className="main-body">
      <Search filterListViaSearch={filterListViaSearch} />
      <p className="message">{messages()}</p>

      <div className="card-container">
        {searchedList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} data={restaurant.info} />
        ))}
      </div>
    </div>
  );
}
export default MainBody;
