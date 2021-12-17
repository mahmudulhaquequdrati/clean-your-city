import React from "react";
const AboutUs = () => {
  return (
    <div className="my-12">
      <div className="py-24 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 bg-pink-50">
        <div className="px-8 lg:px-16">
          <img
            className="rounded-lg"
            src="https://image.freepik.com/free-photo/joyful-dark-haired-woman-carries-rag-brush-smiles-happily-dressed-casual-clothes-sits-white-desk-with-cleaning-products_273609-25233.jpg"
            alt=""
          />
        </div>
        <div className="px-12 pt-8 lg:pt-0 lg:pr-24 lg:pl-12">
          <h4 className="text-xl text-pink-400 mb-1"> - About us</h4>
          <h4 className="text-4xl pb-4">
            Let us handle your room clean{" "}
            <span className="text-pink-600">proffesionally</span>
          </h4>
          <p className="pb-8 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non
            ipsum vero. Qui quia inventore enim pariatur labore voluptates
            fugit, necessitatibus repellat consectetur deserunt odio odit, eos
            mollitia ipsa accusantium!
          </p>
          <div className="">
            <button className="bg-pink-500 rounded-lg text-gray-100 px-6 py-3">
              Book Services
            </button>
            {/* <div>
              <h2 className="text-4xl font-bold py-4 text-pink-600">500+</h2>
              <p className="font-semibold text-pink-500">Happy Customers</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold py-4 text-pink-600">16+</h2>
              <p className="font-semibold text-pink-500">Total Services</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
