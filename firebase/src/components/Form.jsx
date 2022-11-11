import React, { useContext } from "react";
import { Context } from "../context/Context";
const Form = () => {
  const {
    handleFormSubmit,
    setUserName,
    setPhoneNumber,
    setGender,
    userName,
    phoneNumber,
    gender,
    isUpdate,
  } = useContext(Context);
  return (
    <div className="bg-gray-400 w-[20rem] h-[21rem] rounded">
      <div className="flex flex-col justify-center items-center">
        <p className="mt-4 text-2xl border-b-2">Add Contact</p>
        <form
          className="flex flex-col justify-center items-center my-10 space-y-5"
          onSubmit={handleFormSubmit}
        >
          <div>
            <input
              className="px-5 py-2 rounded outline-none focus:bg-gray-200"
              placeholder="Enter username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
            />
          </div>
          <div>
            <input
              className="px-5 py-2 rounded outline-none focus:bg-gray-200"
              placeholder="Enter phonenumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              required
            />
          </div>
          <div className="w-full">
            <select
              className="px-5 py-2 w-full rounded outline-none focus:bg-gray-200"
              onChange={(e) => setGender(e.target.value)}
              value={gender ? gender : 0}
              required
            >
              <option hidden disabled value="0">
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-300 duration-300">
            {isUpdate ? "Update User" : "Add User"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
