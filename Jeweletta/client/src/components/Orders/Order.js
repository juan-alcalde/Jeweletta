import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, ListGroup, ListGroupItem} from "reactstrap";


export const Order = ({ order}) => {

    return (
        <>
        <tr key={order?.id}>
    <td>{order.id}</td>
    <td>{order.userProfile.userName}</td>
    <td>{order?.orderDate}</td>
    <td>{order?.totalAmount}</td>
    
    
   
  </tr>
        </>
      );
      
};