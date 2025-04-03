import RestaurantCard from "./Restaurant";
import { restList } from "../utils/constants";
const Body = ()=>{
    return(
        <div>
            <div className="search">Header</div>
            <div className="res-container">
                {restList.map((restaurant)=> <RestaurantCard key={restaurant.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}
export default Body;