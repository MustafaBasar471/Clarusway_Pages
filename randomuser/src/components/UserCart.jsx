import React from "react";
import { UserCartDetails } from ".";

import { AiOutlineMail } from "react-icons/ai";

const UserCart = ({ userData }) => {
  console.log(userData);
  return (
    <div className="w-full mx-7">
      <div className="flex flex-col items-center">
        <img
          src={userData.picture.large}
          alt="user_profile_photo"
          className="rounded-full"
        />
        <p className="text-2xl mt-2 text-white">
          {userData.name.first} {userData.name.last}
        </p>
      </div>
      <div className="mt-10">
        <div className="w-[17rem] mx-auto space-y-3">
          {/*  */}
          <UserCartDetails icon={<AiOutlineMail />} data={userData.email} />
          <UserCartDetails icon={<AiOutlineMail />} data={userData.email} />
          <UserCartDetails icon={<AiOutlineMail />} data={userData.email} />
          {/*  */}
        </div>
      </div>
      <div className="w-[17rem] text-center mx-auto mt-10 space-y-1">
        <p className="text-white text-xl">Age: {userData.dob.age}</p>
        <p className="text-white text-xl">
          Register Date: {userData.registered.date.slice(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default UserCart;
