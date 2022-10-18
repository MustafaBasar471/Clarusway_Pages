import React, { useState } from "react";
import { Header, AddTask, Task } from "./";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([
    {
      id: new Date().getMilliseconds(),
      title: "The Alpha Team",
      date: "Dec 12 12.00PM",
      complated: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getMilliseconds(),
      title: e.target.taskName.value,
      date: e.target.selectt.value,
      complated: false,
    };
    setData([...data, newTodo]);
  };

  const handleRemove = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  const handleComplated = (id) => {
    const updatedData = data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complated: !todo.complated };
      }
      return todo;
    });
    setData(updatedData);
  };

  return (
    <div className="mt-[2.5rem] w-[40rem] bg-pink-500 pb-10">
      <Header active={isActive} setActive={setIsActive} />
      {isActive && (
        <div className="w-[30rem] mx-auto pb-10">
          <AddTask handleSubmit={handleSubmit} />
        </div>
      )}
      {data.length !== 0 ? (
        <div className="max-h-[25rem] overflow-y-auto scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin">
          {data.map((item, idx) => (
            <div key={idx}>
              <Task
                data={item}
                handleRemove={handleRemove}
                handleComplated={handleComplated}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold">No task yet</p>
      )}
    </div>
  );
};

export default Layout;
