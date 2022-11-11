import React, { useContext } from "react";
import { Context } from "../context/Context";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Table = () => {
  const { userData, deleteDatabaseData, handleUpdate } = useContext(Context);
  return (
    <div className="overflow-auto rounded-lg bg-gray-400 p-5">
      <p className="text-center text-2xl mb-4 text-white border-b-2">
        Contact Table
      </p>
      <table className="w-full">
        <thead>
          <tr>
            {["username", "phone number", "gender", "delete", "edit"].map(
              (item, idx) => (
                <th
                  key={idx}
                  className="capitalize p-3 font-semibold bg-gray-200"
                >
                  {item}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {userData.map((item, idx) => (
            <tr
              key={idx}
              className="bg-white hover:bg-gray-500 hover:text-white duration-100"
            >
              <td className="p-2">{item.userName}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.gender}</td>
              <td
                className="cursor-pointer"
                onClick={() => deleteDatabaseData(item)}
              >
                <AiFillDelete className="text-xl" />
              </td>
              <td className="cursor-pointer">
                <AiFillEdit
                  className="text-xl"
                  onClick={() => handleUpdate(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
