import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { getUserOrders } from "../../Managers/OrderManager";
import { Order } from "./Order";
import { CustomerOrder } from "./CustomerOrder";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const OrderConfirmationPage = () => {
    const [userOrders, setUserOrders] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    
const navigate = useNavigate();
    // This gets the current user
    const localTabloidUser = localStorage.getItem("userProfile");
    const JewelUserObject = JSON.parse(localTabloidUser);


    useEffect(() => {
      getUserOrders(JewelUserObject.id)
          .then((data) => {
              setUserOrders(data);
              let total = 0;
              data.forEach((order) => {
                  total += order.totalAmount;
              });
              setSubtotal(total);
          })
          .catch((error) => {
              console.log("Can't fetch user orders:", error);
          });
  }, [JewelUserObject.id]);

    return (<>
  
        <div className="bg-black  ">
        <div className="container ">
    <div className="row">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h3">Order Confirmation</CardTitle>
                            <CardText className="mb-4">
                                Thank you for your order!
                            </CardText>
                            <CardText>
                                Your order has been successfully placed. Below are the details:
                            </CardText>
                            <CardText>
                                <strong>Order Number:</strong> #1234567890
                            </CardText>
                            <CardText>
                                <strong>Estimated Delivery Date:</strong> January 31, 2024
                            </CardText>
                            <CardText>
                                <strong>Shipping Address:</strong> John Doe, 123 Main St, Anytown, USA
                            </CardText>
                            
                            <CardText className="text-muted">
                                A confirmation email has been sent to your email address.
                            </CardText>
                        </CardBody>
                    </Card>
                    </div>
                    </div>    
        </div>
        </>);
}

export default OrderConfirmationPage;
