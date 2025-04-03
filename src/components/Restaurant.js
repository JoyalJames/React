const RestaurantCard = ({resData}) => 
    {
      const{weight,age,date} = resData;
      return(
      
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXiXrdg36-17G-MPPYNVeoYdoJhESIMLnHw&s"
        />
        <h3>{weight}</h3>
        <h4>{age}</h4>
        <h4>{date}</h4>
        <h4> stars</h4>
        <h4>₹ FOR TWO</h4>
        <h4>1 minutes</h4>
      </div>
  )};

export default RestaurantCard;