import React from 'react'
import MyBooking from "./ChildComponents/MyBooking";
import Header from "../../Home/ChildComponents/Header";
import PersonalDetails from "./ChildComponents/PersonalDetails";

export default function index() {
  return (
    <div>      
      <Header />
      <PersonalDetails/>
      <MyBooking />      
    </div>
  )
}
