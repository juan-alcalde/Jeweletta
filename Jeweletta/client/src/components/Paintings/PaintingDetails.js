import React from "react";
import { Container, Input, InputGroup, Button } from "reactstrap";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { getPaintingById } from "../../Managers/PaintingManager";
import "./PaintingDetails.css"
import { useNavigate } from "react-router-dom";

import { addOrder } from "../../Managers/OrderManager";

export const PaintingDetails = () => {
  const [painting, setPainting] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const localTabloidUser = localStorage.getItem("userProfile");
  const tabloidUserObject = JSON.parse(localTabloidUser);

  useEffect(() => {
    getPaintingById(id)
      .then((paintingData) => {
        setPainting(paintingData);
      })
      .catch((error) => {
        console.error("Error fetching painting details:", error);
      });
  }, [id]);

  const handleAddOrder = () => {
    if (!painting) {
      console.error("Painting details not available");
      return;
    }

    const order = {
      orderDate: new Date(),
      userProfileId: tabloidUserObject.id,
      TotalAmount: painting.price,
      paintingId: id,
    };

    addOrder(order)
      .then(() => {
        window.location.reload();
        alert(`Your Painiting Was Successfully Added to MyCart. Click 'OK' to Continue `);

        console.log("Order added successfully");
        
      })
      .catch((error) => {
        console.error("Error adding order:", error);
      });
  };

  if (!painting) {
    return null; 
  }
      return (<>
      <div className="bg-black text-light py-4">
      <button
            onClick={() => navigate("/paintings")}
           
            
            className="outlined-btn">
                Go Back
            </button>
       
      <div className="container mt-5">
      <div className="row">
      
        <div className="col-md-6">
          
        <img src={painting.imageLocation} alt={painting.title} className="img-fluid" style={{  position: "sticky", top: "10%"}} />
        </div>
        <br></br>
            <br></br> <br></br>
            <br></br> <br></br>
            <br></br>
        <div className="col-md-6">
          <h2>{painting.title}  (Original Painting)</h2>
          <hr></hr>
          <br></br>
          <p className="detail-price">${painting.price}.00 USD</p>

          <Button color='primary' onClick={(e) => handleAddOrder(e)}>
					Add To MyCart
				</Button>
         
         <hr></hr>
         <h4>Product Description:</h4>
          <p>{painting.description}</p>
          <strong>Dimensions: </strong>
          {painting.dimensions}
          <br></br>
          <br></br>
          <h4>About This Item</h4>
          <p> ARTWORKS: The Wall Decor will be Fitted Perfectly in any {painting.dimensions} Picture Frames, selecting your Preferred Color and Material Frames to Decorate your Bedroom, Living room Bathroom... The Value Pack- These Unframed Wall Art will be More Affordable and you can purchase more Artworks to Create Your Favorite Atmosphere in Your Own Space.</p>
<p>PAINTING FOR ROOM AESTHETIC – This Vintage Wall Art will surely Make You Feel Relax and Inspire Every Day. You could Create Your Own Aesthetic Interior Designs with Your Unique Style.
Exceptional Print Craftsmanship: Elevate Your Space with our Art Prints, crafted on Luxuriously Thick, Premium-grade Paper Designed to Showcase the Vividness and Depth of Color. Each piece undergoes a Meticulous Printing Process, ensuring Sharp, Detailed Imagery and Lasting Vibrancy.
<p>A Perfectly Simple Present: Every Piece of Artwork is thoughtfully enclosed in Sophisticated Packaging, ensuring it arrives in Perfect Condition and Ready to be Presented as a Delightful Gift.</p>
Your Happiness, Our Promise: We're Committed to Your Contentment. Should there be any dissatisfaction with your order, Rest Assured, we're here to Make Things Right. Whether it's a complete Refund or a Brand-new Replacement you seek, no questions asked. Our aim is to Enhance those Precious Moments with your Dear ones through our Innovative and Distinctive Designs.</p>
          
          {/* Additional product information, ratings, reviews, etc. can be added here */}
         
        </div>
        </div>
        </div> 
        </div>
        </> );
};