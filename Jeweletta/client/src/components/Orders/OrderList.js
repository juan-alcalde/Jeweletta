
import React, { useEffect, useState } from "react";

import { Order } from "./Order";
import { getAllOrders } from "../../Managers/OrderManager";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    getAllOrders().then(order => setOrders(order));
}

useEffect(() => {
    getOrders();
}, [])

  return (
    <div className="merchandise-management-page">
      <h2>Orders</h2>
      <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>User Profile</th>
              <th>Order Date</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return <Order key={order.id} order={order} />;
            })}
          </tbody>
        </table>
    </div>
  );
};

export default OrderList;

