import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "./MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="m-1 ">
      <h3 className="pt-6 px-4 text-xl font-bold">My Orders</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {orders.map((order) => (
          <MyOrder order={order} key={order._id}></MyOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
