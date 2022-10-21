import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";

const Layout = () => {
  const [userData, setUserData] = useState(null);
  const [userInfo, setUserInfo] = useState("");
  const [saveUserData, setSaveUserData] = useState(null);

  const getRandomUser = async () => {
    await axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setUserData(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  const getInfo = (hover) => {
    switch (hover) {
      case "profile":
        setUserInfo(
          `My name is : ${userData.name.first} ${userData.name.last}`
        );
        break;
      case "email":
        setUserInfo(`My email is : ${userData.email}`);
        break;
      case "age":
        setUserInfo(`My age is : ${userData.dob.age}`);
        break;
      case "location":
        setUserInfo(`My location is : ${userData.location.city}`);
        break;
      case "tel":
        setUserInfo(`My tel num is : ${userData.phone}`);
        break;
      case "password":
        setUserInfo(`My password is : ${userData.login.password}`);
        break;
      default:
        setUserInfo(
          `My name is : ${userData.name.first} ${userData.name.last}`
        );
        break;
    }
  };

  return (
    <div className="w-[50rem] mx-auto mt-10 bg-slate-100 p-5">
      {/*  */}
      {userData && (
        <div className="flex flex-col justify-center items-center">
          <div className="mt-3">
            <img
              src={userData.picture.large}
              alt="profile_photo"
              className="rounded-full border-[5px] border-slate-400"
            />
          </div>
          <div className="mt-10">
            {userInfo
              ? userInfo
              : `My name is : ${userData.name.first} ${userData.name.last}`}
          </div>
          {/*  */}
          <div className="flex justify-between w-[30rem] mx-auto mt-5">
            <CgProfile
              className="text-4xl cursor-pointer"
              onMouseEnter={() => getInfo("profile")}
            />
            <CgProfile
              className="text-4xl cursor-pointer"
              onMouseEnter={() => getInfo("email")}
            />
            <CgProfile
              className="text-4xl cursor-pointer"
              onMouseEnter={() => getInfo("age")}
            />
            <CgProfile
              className="text-4xl cursor-pointer"
              onMouseEnter={() => getInfo("location")}
            />
            <CgProfile
              className="text-4xl cursor-pointer"
              onMouseEnter={() => getInfo("tel")}
            />
            <CgProfile
              className="text-4xl cursor-pointer"
              onMouseEnter={() => getInfo("password")}
            />
          </div>
          {/*  */}
        </div>
      )}
      {/*  */}
      <div className="w-[30rem] mx-auto flex justify-between mt-10">
        <button
          className="px-5 py-2 bg-slate-400 rounded-md text-white"
          onClick={() => getRandomUser()}
        >
          New User
        </button>
        <button className="px-5 py-2 bg-slate-400 rounded-md text-white">
          Add User
        </button>
      </div>
    </div>
  );
};

export default Layout;
