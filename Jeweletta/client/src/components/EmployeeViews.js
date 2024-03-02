import React from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryList } from "./Categories/CategoryList";

import { PaintingForm } from "./Paintings/PaintingFormAdmin";

import { AdminPaintingList } from "./Paintings/AdminPaintingList";
import { PaintingEdit } from "./Paintings/PaintingEdit";





export default function EmployeeViews() {
  return (
      <Routes>
        
        <Route path="/" element={<></>} />
        <Route path="/paintings/admin" element= {<AdminPaintingList/>} />
        <Route path="/categories" element={<CategoryList/>} />
        <Route path="/painting/add" element={<PaintingForm />} />
        <Route path="/painting/edit/:id" element={<PaintingEdit />} />
    </Routes>
  );
}
