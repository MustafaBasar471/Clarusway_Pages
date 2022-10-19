import React from "react";

const UserCartDetails = ({ icon, data }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-3xl text-white">{icon}</div>
      <p className="text-lg text-white hover:underline cursor-pointer">
        {data}
      </p>
    </div>
  );
};

export default UserCartDetails;
