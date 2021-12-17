import React, { useEffect, useState } from "react";
import ManageAllOrderes from "./ManageAllOrders/ManageAllOrderes";

const ManageOrder = () => {
  const [allorders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allorders`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  return (
    <div className="m-1 ">
      <h3 className="pt-6 px-4 text-xl text-center lg:text-left font-bold">
        Manage All Orders
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {allorders.map((order) => (
          <ManageAllOrderes key={order._id} order={order}></ManageAllOrderes>
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
