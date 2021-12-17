import React from "react";

const DashBoardHome = () => {
  return (
    <div className="h-auto  lg:h-screen ">
      <div className="pt-4  text-4xl text-center font-bold text-pink-600 ">
        <h2>DashBoard</h2>

        <div className=" flex h-10/12 justify-center">
          <img
            className="h-full rounded-lg w-full lg:w-7/12 lg:-mt-12 -mt-4"
            src="https://i.ibb.co/T09r0Zd/site-stats-concept-illustration-114360-1509-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
