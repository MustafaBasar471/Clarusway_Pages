import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserCart } from ".";

const Layout = () => {
  const [userData, setUserData] = useState(null);
  const getRandomUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        console.log(res);
        setUserData(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <>
      {userData ? (
        <div className="w-[30rem] h-[30rem] mx-auto bg-slate-400">
          <div className="flex justify-center items-start mt-10">
            <UserCart userData={userData} />
          </div>
        </div>
      ) : (
        "No User Data Yet"
      )}
      <div className="text-center mt-5">
        <button
          className="px-5 py-2 rounded hover:shadow bg-slate-400 hover:bg-slate-600"
          onClick={() => getRandomUser()}
        >
          Get Random User
        </button>
      </div>
    </>
  );
};

export default Layout;
