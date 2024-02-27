// Painting.js
import React from "react";
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
      </CardBody>
    </Card>
  );
};
