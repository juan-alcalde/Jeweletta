import React from "react";
import { Route, Routes } from "react-router-dom";
import { PaintingList } from "./Paintings/PaintingList";
import { PaintingDetails } from "./Paintings/PaintingDetails";
import Home from "./HomePage/Home";




export default function CustomerViews() {
  return (
      <Routes>
        
        <Route path="/" element={ <Home/> } />
        <Route path="/paintings" element= {<PaintingList />} />
        <Route path="/paintings/:id" element= {<PaintingDetails/>} />
         
    </Routes>
  );
}
