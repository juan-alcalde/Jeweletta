import React from "react";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { getPaintingById } from "../../Managers/PaintingManager";
import { Card, CardBody, CardImg } from "reactstrap";

export const PaintingDetails = () => {
    const [painting, setPainting] = useState();
    const { id } = useParams();
    
    
    useEffect(() => {
        getPaintingById(id).then(setPainting);
      }, []);
    
      if (!painting) {
        return null;
      }
      return (<>
      <h1>DETAILS </h1>
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
        </> );
};