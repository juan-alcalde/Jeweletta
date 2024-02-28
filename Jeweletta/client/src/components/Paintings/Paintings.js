// Painting.js
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg } from "reactstrap";

export const Painting = ({ painting }) => {
  return (
    <Card className="m-4">
      <CardImg top src={painting?.imageLocation} alt={painting?.title} />
      <CardBody>
        <p>
          <strong>{painting?.title}</strong>
        </p>
        <p>
          <strong>{painting?.price}</strong>
        </p>
        <br></br>
        <Link to={`/paintings/${painting.id}`}>
    <strong>details</strong>
</Link>
      </CardBody>
    </Card>
  );
};
