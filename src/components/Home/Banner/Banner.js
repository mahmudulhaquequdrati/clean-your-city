import React from "react";

const Banner = () => {
  return (
    <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 px-8 py-8">
      <div className="pt-12 px-4">
        <h4 className="uppercase text-blue-400 my-2">We are puresh</h4>
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-gray-700 my-3">
          Professional Cleaning
        </h2>
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-gray-700 ">
          For Your Home Services
        </h2>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          inventore id reiciendis vero provident accusantium porro totam aliquid
          doloribus, praesentium ipsa esse, labore pariatur quia!
        </p>
        <button className="bg-pink-600 rounded-lg py-3 px-6 text-white">
          Learn More
        </button>
      </div>
      <div className="flex justify-center items-center">
        {/* https://image.freepik.com/free-photo/smiling-slavic-cleaner-man-with-rubber-gloves-holding-bucket-sponge_141793-125574.jpg 

        import also banner
        */}
        <img
          className="rounded-lg -mb-8 mt-12 lg:mt-0 "
          src="https://image.freepik.com/free-photo/smiling-slavic-cleaner-man-with-rubber-gloves-holding-bucket-sponge_141793-125574.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;