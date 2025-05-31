import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) => 
    {
      const{name,cloudinaryImageId,locality,costForTwo,cuisines,avgRating} = resData;
      return(
      
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{avgRating} ☆ </h4>
        <h4>{locality}</h4>
        <h4> {cuisines.join(" , ")}</h4>
        <h4>₹{costForTwo}</h4>
        <h4>1 minutes</h4>
      </div>
  )};

export default RestaurantCard;