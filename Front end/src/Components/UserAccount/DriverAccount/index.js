import React from 'react'
import MyVehicle from "./ChildComponents/MyVehicle";
import Header from "../../Home/ChildComponents/Header";
import PersonalDetails from "./ChildComponents/PersonalDetails";
import MyTravelDetails from "./ChildComponents/MyTravelDetails";
function Index() {
  return (
    <div>      
      <Header />
      <PersonalDetails/>
      <MyVehicle />   
      <MyTravelDetails/>   
    </div>
  )
}
export default Index;