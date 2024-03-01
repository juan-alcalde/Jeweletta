import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryList } from "./Categories/CategoryList";

import { PaintingForm } from "./Paintings/PaintingFormAdmin";
import { CreateButton } from "./Paintings/PaintingAddButton";




export default function EmployeeViews() {
  return (
      <Routes>
        
        <Route path="/" element={<><h1> HI jewel</h1><CreateButton/></>} />
        <Route path="/categories" element={<CategoryList/>} />
        <Route path="/painting/add" element={<PaintingForm />} />
    </Routes>
  );
}
