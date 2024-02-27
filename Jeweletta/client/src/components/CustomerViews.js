import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";



export default function CustomerViews() {
  return (
      <Routes>
        
        <Route path="/" element={ <h1>hi customer</h1> } />
         
    </Routes>
  );
}
