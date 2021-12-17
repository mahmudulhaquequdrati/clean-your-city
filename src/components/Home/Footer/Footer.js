import React from "react";

const Footer = () => {
  return (
    <>
      <div className="text-gray-50 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 px-24 bg-pink-500 py-16">
        <div>
          <h4 className="text-xl lg:mt-1 mt-8 mb-2 font-semibold">
            Our Address
          </h4>
          <p>#377, Shimultola, Shaistaganj</p>
          <p>Habiganj, Sylhet</p>
          <p>Phone: +8809696374773</p>
        </div>
        <div>
          <h3 className="text-xl mb-2 lg:mt-1 mt-8 font-semibold">Company</h3>
          <p>Our Services</p>
          <p>Contact Us</p>
          <p>Our Blogs</p>
          <p>Login to account</p>
        </div>
        <div>
          <h3 className="text-xl mb-2 lg:mt-1 mt-8 font-semibold">About Us</h3>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            laborum pariatur ut voluptatem!
          </p>
          <div>
            <i className="fab fa-github text-2xl mr-2"></i>
            <i className="fab fa-twitter text-2xl mr-2"></i>
            <i className="fab fa-instagram text-2xl mr-2"></i>
          </div>
        </div>
      </div>
      <div className="bg-pink-500 text-sm text-center text-white pb-4">
        <p>&copy;2021 all right reserved by Mahmud Qudrati</p>
      </div>
    </>
  );
};

export default Footer;
