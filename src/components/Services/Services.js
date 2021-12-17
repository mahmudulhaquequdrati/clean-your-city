import React, { useEffect, useState } from "react";
import Contact from "../Home/Contact/Contact";
import Featured from "../Home/Featured/Featured";
import Footer from "../Home/Footer/Footer";
import Header from "../Shared/Header/Header";
import Singleservice from "./SingleService/Singleservice";

const Services = () => {
  const [allservices, setAllServices] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);

  return (
    <>
      <div className="z-10">
        <Header />
      </div>

      <div className="pt-2 px-12">
        <h2 className="text-pink-600 text-3xl text-center font-bold">
          Service We Provide
        </h2>
        <div className="">
          <img
            className="mx-auto w-8/12 -mt-12 -mb-24 z-0"
            src="https://i.ibb.co/TBh4ffT/services.png"
            alt=""
          />
        </div>
        {bookingSuccess && (
          <div className="flex mt-4 justify-center">
            <p className=" px-4 py-3 rounded text-green-600">
              Service Booked Successfully!!
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-12 mx-8 ">
          {allservices.map((allService) => (
            <Singleservice
              setBookingSuccess={setBookingSuccess}
              allService={allService}
              key={allService._id}
            ></Singleservice>
          ))}
        </div>
      </div>

      <>
        <Featured />
        <Contact />
        <Footer />
      </>
    </>
  );
};

export default Services;
