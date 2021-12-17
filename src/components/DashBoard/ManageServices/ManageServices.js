import React, { useEffect, useState } from "react";
import ManageAllServices from "./ManageAllServices/ManageAllServices";

const ManageServices = () => {
  const [manageServices, setmanageServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setmanageServices(data));
  }, []);
  return (
    <div>
      <h3 className="font-bold text-lg mt-4 ml-6 text-center lg:text-left">
        Manage Services
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-4 mx-4 ">
        {manageServices.map((manageService) => (
          <ManageAllServices
            manageService={manageService}
            key={manageService._id}
          ></ManageAllServices>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
