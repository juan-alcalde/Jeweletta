import React, { useEffect, useState } from "react";
import { getAllPaintings } from "../../Managers/PaintingManager";
import { AdminPainting } from "./AdminPainting";
import { CreateButton } from "./PaintingAddButton";
import "./adminPainting.css"

export const AdminPaintingList = () => {
  const [paintings, setPaintings] = useState([]);

  const getPaintings = () => {
    getAllPaintings().then((allPaintings) => setPaintings(allPaintings));
  };

  useEffect(() => {
    getPaintings();
  }, []);

  return (
    <>
    <div className="merchandise-management-page">
    <header className="page-header">
      <br>
      </br>
      <br></br>
      <br></br>
        <h1> Gallery Management</h1>
        <p>Welcome to the management page. Here, you can manage your list items.</p>
      </header>
      <CreateButton/>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Dimensions</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
              <th></th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
          {paintings.map((painting) => {
              return <AdminPainting key={painting.id} painting={painting} />;
            })}
            </tbody>

          </table>
      </div>
    </>
  );
};