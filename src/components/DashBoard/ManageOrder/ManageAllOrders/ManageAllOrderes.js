import React from "react";
// import useAuth from "../../../../hooks/useAuth";

const ManageAllOrderes = ({
  order,
  handleDeleteUser,
  handleUpdate,
  updateSuccess,
}) => {
  const { img, serviceName, price, description } = order.info;
  const { _id, name, email } = order;
  // const { user } = useAuth();
  return (
    <div className=" m-6 flex justify-center text-center px-6 md:px-2 lg:px-2 shadow-lg  rounded-lg py-4 mx-6 lg:mx-2 md:mx-2 bg-pink-200">
      <div>
        <div className="text-center text-sm py-6 mx-6 px-4 rounded text-pink-400 bg-pink-100">
          <p>Order From: {name}</p>
          <p>User Email: {email}</p>
        </div>

        <div className="flex justify-center items-center px-4 my-4">
          <div className="bg-pink-300 rounded-full w-24 h-24 flex justify-center items-center">
            <img className="w-16 " src={img} alt="" />
          </div>
        </div>
        <h2 className="text-lg font-bold">{serviceName}</h2>
        <p className="text-pink-600 font-semibold">${price}</p>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex flex-col justify-end mx-4 my-2">
          {updateSuccess ? (
            <p className="bg-pink-100 text-green-600 rounded-md my-1 py-2 text-sm px-4">
              shipped
            </p>
          ) : (
            <button
              onClick={() => handleUpdate(_id)}
              className="bg-pink-100 text-green-600 rounded-md my-1 py-2 text-sm px-4"
            >
              update
            </button>
          )}
          <button
            onClick={() => handleDeleteUser(_id)}
            className="bg-red-500 text-white my-1 rounded-md py-2 text-sm px-4"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrderes;
