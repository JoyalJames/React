import RestaurantCard from "./Restaurant";
import { restList } from "../utils/constants";
import { useState } from "react";
const Body = ()=>{
      // Local State Variable - Super powerful variable
   const [listOfRestaurants, setListOfRestraunt] = useState(restList);
    return(
        <div>
            <div className="search"><button onClick={() => {
             const filteredList = listOfRestaurants.filter(
               (res) => res.month > 5
             );
             setListOfRestraunt(filteredList);
             console.log(filteredList);
           }}>
                Header</button></div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=> <RestaurantCard key={restaurant.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}
export default Body;