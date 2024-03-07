import React from "react";
import { useEffect, useState } from "react";
import { Card, CardBody,Badge, CardHeader, CardImg,Button } from "reactstrap";
import { DeleteOrderById, getAllOrders } from "../../Managers/OrderManager";
import { useNavigate } from "react-router-dom";

export const CustomerOrder = ({ order}) => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const getOrders = () => {
    getAllOrders().then((allOrders) => setOrders(allOrders));
  };
  const deleteOrderById = (id) => {
    const confirmDelete = window.confirm("Do you really want to delete this category? This is your last chance to back out.");
    if (confirmDelete) {
      DeleteOrderById(id).then(() => {getOrders();window.location.reload();})
    }
  }

  useEffect(() => {
    getOrders();
  }, []);
    return (
        <>
        
        <Card className="m-7">
      {/* <CardImg top src={order.painting?.imageLocation} alt={order.painting?.title}  style={{ maxWidth: "250px", maxHeight: "" }}/> */}
      <CardBody>
      <div className="container mt-7">
      <div className="row">
      
              <div className="col-md-6">   
               <img src={order.painting.imageLocation} alt={order.painting.title} className="img-fluid" style={{ }} />
              </div>
              
              <div className="col-md-4">
                <h6><strong>{order.painting.title} (Original Painting)</strong></h6>
                <label>Price: ${order.painting.price}.00</label>
                <Badge>Quantity:  1</Badge> 
               <br>
               </br>
               <br></br>
                <Button color= "danger"  onClick={() => deleteOrderById(order.id)}>Delete Item</Button>
              </div>
              <br></br>
        </div>
        </div>
        
      </CardBody>
    </Card>

        </>
      );
      
};

//  <div className="container mt-5">
//       <div className="row">
      
//         <div className="col-md-6">
          
//         <img src={painting.imageLocation} alt={painting.title} className="img-fluid" style={{  position: "sticky", top: "10%"}} />
//         </div>
//         <br></br>
//             <br></br> <br></br>
//             <br></br> <br></br>
//             <br></br>
//         <div className="col-md-6">
//           <h2>{painting.title} : Fantasy Wall art,
//            Room Decor for Home Office,
//             Bedroom Living Room, Wall Decor  (Original Painting)</h2>
//           <hr></hr>
//           <br></br>
//           <p className="detail-price">${painting.price}.00 USD</p>
//           <button className="btn btn-primary">Add to Cart</button>
//           <button className="btn btn-secondary ml-2">Buy Now</button>
//          <hr></hr>
//          <h4>Product Description:</h4>
//           <p>{painting.description}</p>
//           <strong>Dimensions: </strong>
//           {painting.dimensions}
//           <br></br>
//           <br></br>
//           <h4>About This Item</h4>
//           <p> ARTWORKS: The Wall Decor will be Fitted Perfectly in any {painting.dimensions} Picture Frames, selecting your Preferred Color and Material Frames to Decorate your Bedroom, Living room Bathroom... The Value Pack- These Unframed Wall Art will be More Affordable and you can purchase more Artworks to Create Your Favorite Atmosphere in Your Own Space.</p>
// <p>PAINTING FOR ROOM AESTHETIC – This Vintage Wall Art will surely Make You Feel Relax and Inspire Every Day. You could Create Your Own Aesthetic Interior Designs with Your Unique Style.
// Exceptional Print Craftsmanship: Elevate Your Space with our Art Prints, crafted on Luxuriously Thick, Premium-grade Paper Designed to Showcase the Vividness and Depth of Color. Each piece undergoes a Meticulous Printing Process, ensuring Sharp, Detailed Imagery and Lasting Vibrancy.
// <p>A Perfectly Simple Present: Every Piece of Artwork is thoughtfully enclosed in Sophisticated Packaging, ensuring it arrives in Perfect Condition and Ready to be Presented as a Delightful Gift.</p>
// Your Happiness, Our Promise: We're Committed to Your Contentment. Should there be any dissatisfaction with your order, Rest Assured, we're here to Make Things Right. Whether it's a complete Refund or a Brand-new Replacement you seek, no questions asked. Our aim is to Enhance those Precious Moments with your Dear ones through our Innovative and Distinctive Designs.</p>
          
//           {/* Additional product information, ratings, reviews, etc. can be added here */}
         
//         </div>
//         </div>
//         </div>
// <main>
//     {/* Cart items */}
//     <div className="container cart">
//         <h1>Your Shopping Cart</h1>
//         <div className="cart-items">
//             {/* Cart item */}
//             <div className="cart-item">
//                 <img src="product-image.jpg" alt="Product Image" className="cart-item-image" />
//                 <div className="item-details">
//                     <h3 className="cart-item-title">Product Name</h3>
//                     <p className="cart-item-price">$XX.XX</p>
//                     <input type="number" defaultValue="1" className="cart-item-quantity" />
//                     <button className="btn-remove">Remove</button>
//                 </div>
//             </div>
//             {/* Repeat for each item in the cart */}
//         </div>
//         <div className="cart-summary">
//             <p className="cart-summary-text">Subtotal (<span id="total-items">X</span> items): <span id="total-price">$XX.XX</span></p>
//             <button className="btn btn-primary btn-checkout">Proceed to checkout</button>
//         </div>
//     </div>

<thead>
<tr>
 <th></th>
</tr>
</thead>
// </main>
