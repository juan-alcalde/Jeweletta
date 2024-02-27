// PaintingList.js
import React, { useEffect, useState } from "react";
import { getAllPaintings } from "../../Managers/PaintingManager";
import { Painting } from "./Paintings";

export const PaintingList = () => {
  const [paintings, setPaintings] = useState([]);

  const getPaintings = () => {
    getAllPaintings().then((allPaintings) => setPaintings(allPaintings));
  };

  useEffect(() => {
    getPaintings();
  }, []);

  return (
    <>
      <div className="painting-list">
        <div className="row justify-content-center">
          <div className="cards-column">
            {paintings.map((painting) => {
              return <Painting key={painting.id} painting={painting} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
