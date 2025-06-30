import RestaurantCard from "./Restaurant";
// import { restList } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{
      // Local State Variable - Super powerful variable
    //   Whenever there is a chamge in any state variables react will findout diff btwn the virtual DOM and rerender our component and update the DOM
   const [listOfRestaurants, setListOfRestraunt] = useState([]);
   const [filteredlistOfRestaurants, setFilteredListOfRestraunt] = useState([]);
    const[search,setSearch] = useState("");
   useEffect (()=>{

    console.log('useeffect called');

    fetchData();
   },[]);
   const fetchData = async ()=>{
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //optional chaining
    setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };
console.log("body rendered");

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div>
            <div>
                <input type="text" className="searchbox" value={search}  onChange={(e)=>{
                    setSearch(e.target.value);
                }}/>    
                <button onClick={()=>{
                    const filtered = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(search.toLowerCase()));
                    setFilteredListOfRestraunt(filtered)
                }}>Search</button>
            </div>
            
            <div className="search"><button onClick={() => {
                        //filter
                    const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.7
                    
                    );
                    setListOfRestraunt(filteredList);
                    console.log(filteredList);
                }}>
                filter</button>
            </div>
            <div className="res-container">
                {filteredlistOfRestaurants.map((restaurant)=> 
                
                <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard  resData={restaurant.info}/></Link>
            
            )}
            </div>
        </div>
    )
}
export default Body;