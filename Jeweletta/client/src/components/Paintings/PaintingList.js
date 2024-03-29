// PaintingList.js
import React, { useEffect, useState } from "react";
import { getAllPaintings } from "../../Managers/PaintingManager";
import { Painting } from "./Paintings";
import "./PaintingList.css"
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, Badge, CardFooter, CardHeader } from "reactstrap";

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
    <div className="painting-container">
                <div className="painting-background">

                </div>
            </div>
           
<div className="bg-black text-light py-4">
<div className="container">
  <br></br>
  <br></br>
  <br></br>
 
  
      <div className="row">
        {paintings.map((painting) => (
          <div key={painting.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Card  className="painting-card" >
              <CardImg
                top
                src={painting.imageLocation}
                alt={painting.title}
               
              />
              <CardHeader>
              <p className="card-title">
                  <strong>{painting.title}</strong>
                </p>
              </CardHeader>
              <CardBody className="card-body">
              <p className="card-title">
              <Badge pill color='info' >
			           <span className='align-middle'>{painting.category.name}</span>
		          </Badge>
              </p>
                <p className="card-price">
                  <strong>${painting.price}.00</strong>
                </p>
              </CardBody>
              <CardFooter>
                <Link className="card-link" to={`/paintings/${painting.id}`}>
                  <strong>More Details</strong>
                </Link>
                </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};
