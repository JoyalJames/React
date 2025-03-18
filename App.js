import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => {return(
<div className="header">
      <div className="logo-container">
        <img
          className="logo"
                  src="data:image/png;base64,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"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
)};
const RestaurantCard = ({resName,cuisines}) => 
  //const RestaurantCard = (props)
  {return(
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXiXrdg36-17G-MPPYNVeoYdoJhESIMLnHw&s"
      />
     {/* <h3>{props.resName}</h3> */}
      <h3>{resName}</h3>
      {/* <h4>{props.cuisines}</h4> */}
      <h4>{cuisines}</h4>
      <h4> stars</h4>
      <h4>₹ FOR TWO</h4>
      <h4>1 minutes</h4>
    </div>
)};
const Body = ()=>{
    return(
        <div>
            <div className="search">Header</div>
            <div className="res-container">
                <RestaurantCard resName = "Meghana Foods" cuisines = "Biryani, Mandhi"/>
                <RestaurantCard resName = "KFC" cuisines = "Rice, Burger"/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}
const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
        
    )
};
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<AppLayout/>);
