import React from "react";
import { Route, Routes } from "react-router-dom";
import { PaintingList } from "./Paintings/PaintingList";
import { PaintingDetails } from "./Paintings/PaintingDetails";




export default function CustomerViews() {
  return (
      <Routes>
        
        <Route path="/" element={ <h1>hi customer</h1> } />
        <Route path="/paintings" element= {<PaintingList />} />
        <Route path="/paintings/:id" element= {<PaintingDetails/>} />
         
    </Routes>
  );
}
