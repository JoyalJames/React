import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MenuApi } from '../utils/constants';
const Restaurantmenu = () => {
   const[resInfo,setResInfo]= useState();
   
   const {resId} = useParams();
 

   useEffect(()=>{
      fetchMenu();
   },[]);

   const fetchMenu = async ()=>{
      const data = await fetch(MenuApi + resId);
      const json = await data.json();

      console.log(json);

      setResInfo(json.data);
   };
   // if (state===null) return <Shimmer/>

   // const{name} = resInfo?.cards[0]?.card.card

  return (
    <div>
      <h1>{resInfo?.cards[0]?.card.card.text}</h1>
      <h2>hi</h2>
    </div>
  )
}

export default Restaurantmenu