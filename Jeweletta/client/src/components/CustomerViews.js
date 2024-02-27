import React from "react";
import { Route, Routes } from "react-router-dom";
import { PaintingList } from "./Paintings/PaintingList";




export default function CustomerViews() {
  return (
      <Routes>
        
        <Route path="/" element={ <h1>hi customer</h1> } />
        <Route path="/paintings" element= {<PaintingList />} />
         
    </Routes>
  );
}
