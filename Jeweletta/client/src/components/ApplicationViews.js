import React from "react";
import EmployeeViews from "./EmployeeViews";
import CustomerViews from "./CustomerViews";



export default function ApplicationViews() {
  const localTabloidUser = localStorage.getItem("userProfile");
  const JewelUserObject = JSON.parse(localTabloidUser)
 
  if(JewelUserObject?.id === 2) {
//employyee view
return (<EmployeeViews/>)
  }
  else {
//custoview
return <CustomerViews/>
  }
}
