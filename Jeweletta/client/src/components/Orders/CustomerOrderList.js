import { useEffect, useState } from "react";
import { Card, CardBody, CardImg, CardHeader, CardText, CardTitle, Col, Container, Row, Table, CardFooter } from "reactstrap";
import { getUserOrders } from "../../Managers/OrderManager";
import { Order } from "./Order";
import { CustomerOrder } from "./CustomerOrder";


export const UserOrders = () => {
    const [userOrders, setUserOrders] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

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
      <div className="col-md-7" >
          <div className="m-7">
            <Card className="m-4">
              <CardHeader className="bg-secondary ">
                <h1 style={{ color: "white" }}>My Shopping Cart</h1>
              </CardHeader>

              {userOrders.map((order) => { return <CustomerOrder key={order.id} order={order} />; })}   
               <CardFooter>
                <p>
                Subtotal ({userOrders.length} items): ${subtotal.toFixed(2)}
                </p>
               </CardFooter>
            </Card>
         </div>
        </div>

            <div className="col-md-5">
            <div className="container cart">
                <Card className="m-4">
                  <CardHeader className="bg-secondary ">
                     <h1 style={{ color: "white" }}> My Subtotal </h1>
                  </CardHeader>
                      <CardBody>
                      <p>
                                            <strong>Subtotal ({userOrders.length} items): </strong>${subtotal.toFixed(2)}
                                        </p>
                      </CardBody>
                      <CardFooter>
                      <button className="btn btn-primary btn-checkout">Proceed to checkout</button>
                      </CardFooter>
                </Card> 
            </div>
            </div>

   </div>
  </div>
  </div>
      </>)
}




{/* <table  className="merchandise-management-page">
<thead>
  <tr>
    <th>Order Id</th>
    <th>User Profile</th>
    <th>Order Date</th>
    <th>Total Amount</th>
  </tr>
</thead>
<tbody>
  {userOrders.map((order) => {
    return <CustomerOrder key={order.id} order={order} />;
  })}
</tbody>
</table> */}